import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import WhiteSpace from "../pages/WhiteSpace";
import gsap from "gsap";
import BackgroundAudio from "../components/BackgroundAudio";

function LandingPage() {
  const [animationStage, setAnimationStage] = useState("initial");
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef();
  const logoRef = useRef();
  const logoContainerRef = useRef(); // New ref for the container
  const rotateRef = useRef();

  useEffect(() => {
    // Initial position - center of screen
    gsap.set(logoContainerRef.current, {
      position: "fixed",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50
    });

    // Start rotating immediately
    rotateRef.current = gsap.to(logoRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "none",
      duration: 2,
      transformOrigin: "center center",
    });

    // Move logo after 2s
    const startTimer = setTimeout(() => {
      setAnimationStage("animating");
      
      // Animate the movement to the top
      gsap.to(logoContainerRef.current, {
        y: -(window.innerHeight * 0.5 - 70), // Move up to 70px from top
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          setAnimationStage("complete");
          setShowContent(true);
          
          // Decelerate the rotation smoothly to a stop
          if (rotateRef.current) {
            gsap.to(logoRef.current, {
              rotation: Math.ceil(gsap.getProperty(logoRef.current, "rotation") / 360) * 360, // Snap to nearest full rotation
              duration: 1, // 1 second for smooth deceleration
              ease: "power2.out", // Smooth easing for deceleration
            });
            rotateRef.current.kill();
          }

          // Fade in content
          if (contentRef.current) {
            gsap.to(contentRef.current, {
              opacity: 1,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        }
      });
    }, 2000);

    return () => {
      clearTimeout(startTimer);
      rotateRef.current?.kill();
    };
  }, []);

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Logo Container - handles the movement */}
      <Link to="/" aria-label="Home">
        <div
          ref={logoContainerRef}
          className={`z-50 ${animationStage === "complete" ? "hover:scale-105" : ""}`}
          style={{
            width: "120px",
            height: "120px",
          }}
        >
          <img
            ref={logoRef}
            src="/img/logo.gif"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </Link>

      <BackgroundAudio src="/audio/whitespace.mp3" volume={0.15} />

      {/* Content */}
      <div
        ref={contentRef}
        className="w-full mt-40 px-4"
        style={{ opacity: 0 }}
      >
        {showContent && <WhiteSpace />}
      </div>
    </div>
  );
}

export default LandingPage;

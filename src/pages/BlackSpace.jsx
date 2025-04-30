import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import VentForm from "../components/VentForm";
import gsap from "gsap";
import BackgroundAudio from "../components/BackgroundAudio";

function BlackSpace() {
  const [animationStage, setAnimationStage] = useState("initial");
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef();
  const logoRef = useRef();
  const rotateRef = useRef(); // GSAP rotation reference

  useEffect(() => {
    if (!logoRef.current) return;
    
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
      // Calculate the final position - directly to the top
      const finalY = -(window.innerHeight / 2 - 20 - 60); // Half screen height minus top margin minus half logo height
      
      // Animate the movement directly to the final position
      gsap.to(logoRef.current, {
        y: finalY,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          // Stop the rotation when it reaches the final position
          if (rotateRef.current) {
            rotateRef.current.kill();
            
            // Complete the current rotation smoothly
            gsap.to(logoRef.current, {
              rotation: Math.ceil(gsap.getProperty(logoRef.current, "rotation") / 360) * 360,
              duration: 1,
              ease: "power3.out",
              onComplete: () => {
                // Update the animation stage after all animations complete
                setAnimationStage("complete");
                setShowContent(true);
                
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
          }
        }
      });
      
      setAnimationStage("animating");
    }, 2000);
  
    return () => {
      clearTimeout(startTimer);
      if (rotateRef.current) rotateRef.current.kill();
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <BackgroundAudio src="/audio/blackspace.mp3" volume={0.1} />
      {/* Logo - Always visible */}
      <Link to="/" aria-label="Home">
        <div 
          className={`z-50 ${animationStage === "complete" ? "hover:scale-105" : ""}`}
          style={{
            position: "fixed", // Always fixed positioning
            top: "50%",  
            left: "50%",
            transform: "translate(-50%, -50%)", // Center aligned
            width: "120px",
            height: "120px",
          }}
        >
          <img
            ref={logoRef}
            src="/img/logo-1.gif"
            alt="Logo"
            className="w-full h-full object-contain"
            style={{ display: "block" }} // Always visible
          />
        </div>
      </Link>
      
      {/* Content */}
      <div
        ref={contentRef}
        className="w-full mt-40 px-4"
        style={{ opacity: 0 }}
      >
        {showContent && <VentForm />}
      </div>
    </div>
  );
}

export default BlackSpace;
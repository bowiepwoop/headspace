import { useState } from "react";

const emotions = [
  "happy", "ecstatic", "manic", "sad", "depressed", "miserable",
  "angry", "enraged", "furious", "neutral", "afraid", "stressed"
];

function VentForm() {
  const [inputText, setInputText] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Emotion:", selectedEmotion);
    console.log(inputText);
    setInputText("");
    setSelectedEmotion(null);
  };

  // Mobile bg-3.gif dimensions and scaling
  const mobileBgWidth = 182;
  const mobileBgHeight = 239;
  const mobileScaleFactor = 1.5; // Adjust this as needed
  const scaledMobileWidth = mobileBgWidth * mobileScaleFactor;
  const scaledMobileHeight = mobileBgHeight * mobileScaleFactor;

  // Desktop bg-2.gif dimensions
  const desktopBgWidth = 860;
  const desktopBgHeight = 387;

  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center px-4 overflow-hidden fixed inset-0">
      <h1 className="text-white text-4xl font-bold mb-2 text-center backdrop-blur-sm bg-black/30 px-4 py-2 rounded-md">
        You've made it to Black Space.
      </h1>
      <p className="text-white text-md text-center mt-2">
        a space for your mind to unwind. How are you feeling today?
      </p>

      {/* Emotion Selection for Web */}
      <div className="hidden md:flex justify-center items-center gap-4 mt-4 px-4 max-w-full">
        {emotions.map((emotion) => (
          <div key={emotion} className="relative flex flex-col items-center">
            <img
              src={`/img/emotions/${emotion}.gif`}
              alt={emotion}
              title={emotion.charAt(0).toUpperCase() + emotion.slice(1)}
              onClick={() => setSelectedEmotion(emotion)}
              className="w-30 h-30 object-contain cursor-pointer transition duration-200 opacity-80 hover:opacity-100"
            />
            {selectedEmotion === emotion && (
              <img
                src="/img/line-1.gif"
                alt="Selected Emotion Line"
                className="absolute top-full mt-2 w-20 pointer-events-none"
              />
            )}
          </div>
        ))}
      </div>

      {/* Emotion Selection for Mobile */}
      <div className="block md:hidden mt-4 w-4/5">
        <select
          value={selectedEmotion}
          onChange={(e) => setSelectedEmotion(e.target.value)}
          className="w-full p-2 rounded bg-black text-white border border-white focus:ring-0 focus:outline-none"
        >
          <option value="">Select how you're feeling</option>
          {emotions.map((emotion) => (
            <option key={emotion} value={emotion}>
              {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Show line.gif under selected emotion for Web */}
      {selectedEmotion && (
        <img
          src="/img/line-1.gif"
          alt="Selected Emotion Line"
          className="absolute top-full mt-1 w-16 md:w-20 pointer-events-none"
        />
      )}

      {/* Text Area for Venting */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center mt-4">
        {/* Mobile version with bg-3.gif */}
        <div 
          className="block md:hidden relative flex items-center justify-center mx-auto"
          style={{
            width: `${scaledMobileWidth}px`,
            height: `${scaledMobileHeight}px`,
            backgroundImage: 'url("/img/bg-3.gif")',
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <textarea
            placeholder={
              selectedEmotion
                ? `You're feeling ${selectedEmotion}. Let it all out . . .`
                : "Let it all out . . ."
            }
            className="absolute w-[85%] h-[75%] p-4 bg-transparent text-white placeholder-gray-300 resize-none focus:outline-none border-none"
            style={{
              top: "12%",
              left: "7.5%",
              scrollbarWidth: "thin",
              scrollbarColor: "white transparent",
            }}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        {/* Desktop version with bg-2.gif */}
        <div 
          className="hidden md:block relative"
          style={{
            width: `${desktopBgWidth}px`,
            height: `${desktopBgHeight}px`,
            backgroundImage: 'url("/img/bg-2.gif")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <textarea
            placeholder={
              selectedEmotion
                ? `You're feeling ${selectedEmotion}. Let it all out . . .`
                : "Let it all out . . ."
            }
            className="absolute w-[85%] h-[73%] p-4 bg-transparent text-white placeholder-gray-300 resize-none focus:outline-none border-none"
            style={{
              top: "13%",
              left: "8.5%",
              scrollbarWidth: "thin",
              scrollbarColor: "white transparent",
            }}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        {/* Button gif */}
        <div className="relative group mt-6 cursor-pointer">
          <img
            src="/img/letgobtn.gif"
            width="80"
            onClick={handleSubmit}
            className="transform transition duration-300 hover:scale-110"
          />
          <img
            src="/img/line-1.gif"
            alt="Line Under Button"
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
        </div>
      </form>
    </div>
  );
}

export default VentForm;
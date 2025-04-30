import { Link } from "react-router-dom";
import letgoGif from "/public/img/letgo-3.gif"; 
import BackgroundAudio from "../components/BackgroundAudio";

function WhiteSpace() {
  return (
    <div className="text-center px-4">
      <BackgroundAudio src="/audio/whitespace.m4a" volume={0.1} />
      <h1 className="text-6xl font-semibold mb-4">Welcome to White Space</h1>
      <p className="text-sm text-gray-700 max-w-xl mx-auto mb-6 mt-10">
        You’ve entered your safe space. Feel free to let your thoughts wander.
      </p>

      <Link to="/venting">
        <img
          src={letgoGif}
          className="mt-40 mx-auto cursor-[url(/cursor/pointer-black.cur),pointer] hover:scale-105 transition duration-300"
        />
      </Link>
    </div>
  );
}

export default WhiteSpace;

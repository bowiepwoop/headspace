import React from 'react';

const EmotionSelector = ({ emotion, setEmotion }) => {
  return (
    <div className="mt-5">
      <select
        className="px-4 py-2 bg-white border border-gray-300 rounded-md"
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
      >
        <option value="">Select Emotion</option>
        <option value="sad">Sad</option>
        <option value="angry">Angry</option>
        <option value="happy">Happy</option>
        <option value="neutral">Neutral</option>
      </select>
    </div>
  );
};

export default EmotionSelector
import React from "react";

const Header = ({ zone = "White Space" }) => {
  const zoneMoods = {
    "White Space": "🌫️",
    "Headspace": "🧠",
    "Black Space": "🕳️",
    "Reflection": "🌱",
  };

  return (
    <header className="text-center py-4 text-white font-mono text-xl tracking-wider">
      <div className="opacity-80">
        {zoneMoods[zone]} welcome to {zone.toLowerCase()}
      </div>
    </header>
  );
};

export default Header;

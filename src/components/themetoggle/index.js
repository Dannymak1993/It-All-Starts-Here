import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";


const Themetoggle = () => {
  const colors = ["#000000", "#647b7b", "#835353", "#849475", "#95b9c5", "#c0af73", "#b5a1bf", "#6c5232df"];
  const [currentColorIndex, setCurrentColorIndex] = useState(
    parseInt(localStorage.getItem("currentColorIndex")) || 0
  );

  const toggleColor = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
    document.documentElement.style.setProperty(
      "--bg-color",
      colors[nextColorIndex]
    );
    localStorage.setItem("currentColorIndex", nextColorIndex);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-color",
      colors[currentColorIndex]
    );
  }, [currentColorIndex]);

  return (
    <div className="nav_ac" onClick={toggleColor}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
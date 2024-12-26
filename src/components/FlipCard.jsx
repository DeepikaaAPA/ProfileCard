import React, { useState } from "react";
import "../FlipCard.css";
import FlipCardFront from "./FlipCardFront";
import About from "./About";

const FlipCard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flip-card-container  md:w-96 "
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <div className={`flip-card ${isFlipped ? "flipped " : ""}`}>
        <div className="flip-card-front flex-col m-auto bg-teal-950 text-white p-5 rounded-lg shadow-lg">
          <FlipCardFront data={data}></FlipCardFront>
        </div>
        <div className="flip-card-back flex flex-col bg-green-200 text-gray-500  p-1 rounded-lg shadow-lg">
          <About data={data}></About>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

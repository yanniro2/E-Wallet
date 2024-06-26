/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
// import './card-styles.css'; // Import styles

const CardStack = ({ cards }) => {
  const [activeCardId, setActiveCardId] = useState(null); // State to track the active card ID

  const handleCardClick = (cardId) => {
    setActiveCardId(cardId); // Set the active card ID when a card is clicked
  };

  return (
    <div className="w-full h-full flex flex-col justify-around">
      {cards.map((cardData) => (
        <div key={cardData.id}>
          <Card
            cardData={cardData}
            isActive={cardData.id === activeCardId} // Pass isActive prop based on active card ID
            onClick={() => handleCardClick(cardData.id)} // Pass onClick handler to handle card click
          />
        </div>
      ))}
    </div>
  );
};

export default CardStack;

// FoodCardContainer.js
import React, { useState } from "react";
import FoodCard from "./FoodCard";

function FoodCardContainer() {
  const mainCategories = [
    { name: "Card1", image: "https://example.com/sushi.jpg" },
    { name: "Card2", image: "https://example.com/pizza.jpg" },
    { name: "Card3", image: "https://example.com/pasta.jpg" },
    { name: "Card4", image: "https://example.com/taco.jpg" },
  ];

  const [cardOneIndex, setCardOneIndex] = useState(0);
  const [cardTwoIndex, setCardTwoIndex] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isCardOneVisible, setIsCardOneVisible] = useState(true);
  const [isCardTwoVisible, setIsCardTwoVisible] = useState(true);

  // Handle selection on FoodCard1
  const handleCardOneSelect = () => {
    // Check if at the end of list
    if (currentIndex < mainCategories.length) {
      setCardTwoIndex(currentIndex);
      setCurrentIndex((prev) => prev + 1);
    }
    // Hide Card 2 if it's the last item
    if (currentIndex >= mainCategories.length) {
      setIsCardTwoVisible(false);
    }
  };

  // Handle selection on FoodCard2
  const handleCardTwoSelect = () => {
    if (currentIndex < mainCategories.length) {
      setCardOneIndex(currentIndex);
      setCurrentIndex((prev) => prev + 1);
    }
    // Hide Card 1 if it's the last item
    if (currentIndex >= mainCategories.length) {
      setIsCardOneVisible(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Title above the cards */}
      <h1 className="text-xl font-semibold">Which do you prefer?</h1>
  
      {/* Cards container */}
      <div className="flex space-x-4">
        {/* Card 1 - show if visible */}
        {isCardOneVisible && cardOneIndex < mainCategories.length && (
          <FoodCard
            key="card-one"
            name={mainCategories[cardOneIndex].name}
            image={mainCategories[cardOneIndex].image}
            onSelect={handleCardOneSelect}
          />
        )}
  
        {/* Card 2 - show if visible */}
        {isCardTwoVisible && cardTwoIndex < mainCategories.length && (
          <FoodCard
            key="card-two"
            name={mainCategories[cardTwoIndex].name}
            image={mainCategories[cardTwoIndex].image}
            onSelect={handleCardTwoSelect}
          />
        )}
      </div>
    </div>
  );  
}

export default FoodCardContainer;

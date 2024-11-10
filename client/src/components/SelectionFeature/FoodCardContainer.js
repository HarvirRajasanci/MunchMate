// FoodCardContainer.js
import React, { useState } from "react";
import FoodCard from "./FoodCard";

function FoodCardContainer() {
  const mainCategories = [
    { name: "C1", image: "https://example.com/sushi.jpg" },
    { name: "C2", image: "https://example.com/pizza.jpg" },
    { name: "C3", image: "https://example.com/pasta.jpg" },
    { name: "C4", image: "https://example.com/taco.jpg" },
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
    <div className="flex space-x-4">
      {/*Card1 - show if visible*/}
      {isCardOneVisible && cardOneIndex < mainCategories.length && (
        <FoodCard
          key="card-one"
          name={mainCategories[cardOneIndex].name}
          image={mainCategories[cardOneIndex].image}
          onSelect={handleCardOneSelect}
        />
      )}
      {/*Card2 - show if visible*/}
      {isCardTwoVisible && cardTwoIndex < mainCategories.length && (
        <FoodCard
          key="card-two"
          name={mainCategories[cardTwoIndex].name}
          image={mainCategories[cardTwoIndex].image}
          onSelect={handleCardTwoSelect}
        />
      )}
    </div>
  );
}

export default FoodCardContainer;

// FoodCardContainer.js
import React, { useState } from "react";
import FoodCard from "./FoodCard";

function FoodCardContainer({setDesiredFoodCategory}) {
  const mainCategories = [
    { name: "Japanese", image: "./assets/japanese.png" },
    { name: "Thai", image: "./assets/thai.png" },
    { name: "Chinese", image: "./assets/chinese.png" },
    { name: "Vietnamese", image: "./assets/vietnamese.png" },
    { name: "Korean", image: "./assets/korean.png" },
    { name: "Indian", image: "./assets/indian.png" },
    { name: "Healthy", image: "./assets/healthy.png" },
    { name: "BBQ", image: "./assets/bbq.png" },
    { name: "Pizza", image: "./assets/pizza.png" },
    { name: "Burgers", image: "./assets/burger.png" },
    { name: "Mexican", image: "./assets/mexican.png" },
    { name: "Greek", image: "./assets/greek.png" },
    { name: "Caribbean", image: "./assets/caribbean.png" },
    { name: "Fast Food", image: "./assets/fastfood.png" },
    { name: "Seafood", image: "./assets/seafood.png" },
  ];

  const [cardOneIndex, setCardOneIndex] = useState(0);
  const [cardTwoIndex, setCardTwoIndex] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isCardOneVisible, setIsCardOneVisible] = useState(true);
  const [isCardTwoVisible, setIsCardTwoVisible] = useState(true);

  let currentCategory = "";

  // Handle selection on FoodCard1
  const handleCardOneSelect = () => {
    currentCategory = mainCategories[cardOneIndex].name;
    // Check if at the end of list
    if (currentIndex < mainCategories.length) {
      setCardTwoIndex(currentIndex);
      setCurrentIndex((prev) => prev + 1);
    }
    // Hide Card 2 if it's the last item
    if (currentIndex >= mainCategories.length) {
      setIsCardTwoVisible(false);
      setDesiredFoodCategory(currentCategory); // Set the last category
    }
  };

  // Handle selection on FoodCard2
  const handleCardTwoSelect = () => {
    currentCategory = mainCategories[cardTwoIndex].name;
    if (currentIndex < mainCategories.length) {
      setCardOneIndex(currentIndex);
      setCurrentIndex((prev) => prev + 1);
    }
    // Hide Card 1 if it's the last item
    if (currentIndex >= mainCategories.length) {
      setIsCardOneVisible(false);
      setDesiredFoodCategory(currentCategory); // Set the last category
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

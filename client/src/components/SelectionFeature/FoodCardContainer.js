import React, { useState } from "react";
import FoodCard from "./FoodCard";
import Button from "../Button";

function FoodCardContainer({ setDesiredFoodCategory, handleSubmit }) {
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
  const [showButton, setShowButton] = useState(false); // State for button visibility
  const [matchMessage, setMatchMessage] = useState("Which do you prefer?"); // State for match message

  let currentCategory = "";

  // Handle selection on FoodCard1
  const handleCardOneSelect = () => {
    currentCategory = mainCategories[cardOneIndex].name;
    if (currentIndex < mainCategories.length) {
      setCardTwoIndex(currentIndex);
      setCurrentIndex((prev) => prev + 1);
    }
    if (currentIndex >= mainCategories.length) {
      setIsCardTwoVisible(false);
      setDesiredFoodCategory(currentCategory);
      setMatchMessage(`You've matched with:`); // Change message when final card is selected
      setShowButton(true); // Show the button after selection
    }
  };

  // Handle selection on FoodCard2
  const handleCardTwoSelect = () => {
    currentCategory = mainCategories[cardTwoIndex].name;
    if (currentIndex < mainCategories.length) {
      setCardOneIndex(currentIndex);
      setCurrentIndex((prev) => prev + 1);
    }
    if (currentIndex >= mainCategories.length) {
      setIsCardOneVisible(false);
      setDesiredFoodCategory(currentCategory);
      setMatchMessage(`You've matched with: ${currentCategory}`); // Change message when final card is selected
      setShowButton(true); // Show the button after selection
    }
  };

  // Handle "Show Me" button click
  const handleShowMeClick = () => {
    alert(`You selected: ${currentCategory}`);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Title above the cards */}
      <h1 className="text-xl font-semibold">{matchMessage}</h1>

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

      {/* Show "Show Me" button if showButton is true */}
      {showButton && (
        <Button label={"Let's Eat!"} onClick={handleSubmit} />
      )}
    </div>
  );
}

export default FoodCardContainer;

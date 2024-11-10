import React from "react";

const FoodCard = ({ name, image, selected, onSelect }) => {
  return (
    <div
      className={`relative p-4 w-52 h-60 rounded-xl cursor-pointer flex flex-col items-start justify-between transition-transform duration-300 ease-in-out transform hover:scale-105
        ${selected ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700"}`}
      onClick={onSelect}
    >
      {/*Food name*/}
      <h3 className="text-left font-semibold text-xl">{name}</h3>

      {/*Food img*/}
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded-lg mt-2"
      />

      {/*Light bar as indicator*/}
      <div
        className={`absolute bottom-2 left-0 w-10 h-2 rounded-full transition-all duration-300 ease-in-out
          ${selected ? "bg-green-400" : "bg-gray-300"}
        `}
      ></div>
    </div>
  );
};

export default FoodCard;

import React from "react";

const FoodCard = ({ name, image, selected, onSelect }) => {
  return (
    <div>
      <div
        className={`relative p-4 w-40 h-40 rounded-xl cursor-pointer flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105
          ${selected ? 'bg-gray-300 text-white' : 'bg-gray-200 text-gray-700'}
        `}
        onClick={onSelect}
      >

        {/*Food img*/}
        <img
          src={image}
          alt={name}
          className="w-full h-32 object-cover rounded-lg mt-2"
        />
      </div>
      {/*Food name*/}
      <h3 className="text-lg text-center mt-1">{name}</h3>
    </div>
  );
};

export default FoodCard;

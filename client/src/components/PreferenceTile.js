import React from 'react';

function PreferenceTile({ label, selected, onToggle }) {
  return (
    <div
      className={`relative p-4 w-21 h-20 rounded-xl cursor-pointer flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105
        ${selected ? 'bg-gray-300 text-white' : 'bg-gray-200 text-gray-700'}
      `}
      onClick={onToggle}
    >
      {/* Centered Text */}
      <h3 className="text-center font-semibold">{label}</h3>

      {/* Centered Light bar as an indicator */}
      <div
        className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 rounded-full transition-all duration-300 ease-in-out
          ${selected ? 'bg-green-400' : 'bg-gray-300'}
        `}
      ></div>
    </div>
  );
}

export default PreferenceTile;

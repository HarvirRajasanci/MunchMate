import React from 'react';

function Button({ label, onClick }) {
    return (
      <button className=" bg-[#F36359] text-white py-2 px-6 rounded-full text-lg focus:outline-none focus:ring-2 active:scale-95 transition-transform duration-150 mt-4"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  
  export default Button;
  
import React from "react";

export default function FilterBtnPurple({ title, action, isSelected }) {
  return (
    <div className="w-24">
      <div
        className={`text-center font-semibold border-2 text-sm py-1 rounded-lg cursor-pointer duration-300 
          ${
            isSelected
              ? "bg-purple-light text-black border-purple-light"
              : "border-gray-stroke text-gray-main hover:bg-purple-light hover:text-black hover:border-purple-light"
          }
        `}
        onClick={action}
      >
        {title}
      </div>
    </div>
  );
}

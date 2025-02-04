import React from "react";

export default function FilterBtnWhite({ title, action, isSelected }) {
  return (
    <div className="w-24">
      <div
        className={`text-center font-semibold border-2 text-sm py-1 rounded-lg cursor-pointer duration-300 
          ${
            isSelected
              ? "bg-purple-light border-purple-main text-black"
              : "bg-white border-purple-main text-black hover:bg-purple-light"
          }
        `}
        onClick={action}
      >
        {title}
      </div>
    </div>
  );
}

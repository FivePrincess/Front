import React from "react";
import { useNavigate } from "react-router-dom";

export default function SimpleHeader() {
  const navigate = useNavigate();
  return (
    <div className="text-purple-main">
      <div className="flex justify-between items-end px-32 py-2 ">
        {/** logo */}
        <div
          className="flex items-end hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => {
            navigate("/main");
          }}
        >
          <img
            src="../../public/img/logo.png"
            alt="구집 로고 이미지"
            className="object-cover h-16"
          />
          <div className="font-extrabold text-2xl">구집</div>
        </div>
        <div className="font-extrabold text-2xl">
          게스트하우스, 쉽게 지원하고 쉽게 뽑자
        </div>
      </div>
      <div className="border-t-1 mx-8"></div>
    </div>
  );
}

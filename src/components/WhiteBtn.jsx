import React from "react";

//노란색 버튼
export default function WhiteBtn({ title, action }) {
  //버튼 제목, 버튼 클릭 시 실행 함수
  return (
    <div
      className="w-32 text-center font-semibold bg-white border-2 border-gray-stroke text-gray-main text-sm py-2 px-6 rounded-lg cursor-pointer hover:bg-gray-stroke duration-300"
      onClick={action} // 클릭 시 action 함수 실행
    >
      {title}
    </div>
  );
}

import React from "react";

//보라색 버튼
export default function PurpleBtn({ title, action }) {
  // 버튼 제목과 클릭 시 실행 함수
  return (
    <div
      className="font-semibold bg-purple-main border-2 border-purple-dark text-white text-sm py-2 px-6 rounded-lg cursor-pointer hover:bg-purple-medium duration-300"
      onClick={action} // 클릭 시 action 함수 실행
    >
      {title}
    </div>
  );
}

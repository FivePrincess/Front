import React from "react";

//노란색 버튼
export default function YellowBtn({ title, action }) {
  //버튼 제목, 버튼 클릭 시 실행 함수
  return (
    <div
      className="text-center w-32 bg-yellow-light border-2 border-yellow-main text-black text-sm py-2 px-6 rounded-lg cursor-pointer hover:bg-yellow-baby duration-300 font-semibold"
      onClick={action} // 클릭 시 action 함수 실행
    >
      {title}
    </div>
  );
}

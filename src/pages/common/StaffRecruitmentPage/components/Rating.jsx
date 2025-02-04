import React from "react";
import { FaStar } from "react-icons/fa";
export default function Rating({ rate, cnt }) {
  return (
    <div className="flex text-xs items-center gap-4">
      {/** 뱔점 태그 */}
      <div className="bg-yellow-main w-12 flex justify-center  items-center gap-2 px-8 py-0.5 rounded-lg">
        <div className="">
          <FaStar />
        </div>
        <div className="font-semibold">{rate}</div>
      </div>
      {/** 평가 인원 수 */}
      <div className="text-gray-main">{cnt}명 평가</div>
    </div>
  );
}

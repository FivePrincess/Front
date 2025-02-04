import React from "react";

export default function WorkCondition({ work }) {
  return (
    <div className="w-full">
      <div className="text-2xl font-semibold pb-8">근무 조건</div>
      <div className="flex grid-2 w-full">
        <div className="flex-col w-1/2">
          <div className="flex gap-8 text-lg font-semibold pb-4">
            <div className="text-gray-main w-20">근무 형태</div>
            <div className="font-medium">{work.work_type}</div>
          </div>
          <div className="flex gap-8 text-lg font-semibold  pb-4">
            <div className="text-gray-main w-20">근무 기간</div>
            <div className="flex gap-4 font-medium">
              {work.employment_period}
            </div>
          </div>
        </div>
        <div className="flex-col gap-4 w-1/2">
          <div className="flex gap-8 text-lg font-semibold  pb-4">
            <div className="text-gray-main w-20">고용 형태</div>
            <div className="font-medium">{work.employment_type}</div>
          </div>
          <div className="flex gap-8 text-lg font-semibold  pb-4">
            <div className="text-gray-main w-20">복지</div>
            <div className="font-medium">{work.benefits}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

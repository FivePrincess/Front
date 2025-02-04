import React from "react";
export default function RecruitmentCondition({ recruitment }) {
  return (
    <div className="w-full">
      <div className="text-2xl font-semibold pb-8">모집 조건</div>
      <div className="flex grid-2 w-full">
        <div className="flex-col w-1/2">
          <div className="flex gap-8 text-lg font-semibold pb-4">
            <div className="text-gray-main w-20">모집 기간</div>
            <div className="font-medium">
              {recruitment.recruitment_start_date} -{" "}
              {recruitment.recruitment_end_date}
            </div>
          </div>
          <div className="flex gap-8 text-lg font-semibold  pb-4">
            <div className="text-gray-main w-20">모집 인원</div>
            <div className="flex gap-4 font-medium">
              {recruitment.female_number > 0 ? (
                <div>여 {recruitment.female_number} 명</div>
              ) : (
                ""
              )}
              {recruitment.male_number > 0 ? (
                <div>남 {recruitment.male_number} 명</div>
              ) : (
                ""
              )}
              {recruitment.gender_neutral_number > 0 ? (
                <div>성별 무관 {recruitment.gender_neutral_number} 명</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex gap-8 text-lg font-semibold">
            <div className="text-gray-main w-20">나이</div>
            <div className="font-medium">
              {recruitment.minimum_age} - {recruitment.maximum_age} 세
            </div>
          </div>
        </div>
        <div className="flex-col gap-4 w-1/2">
          <div className="flex gap-8 text-lg font-semibold  pb-4">
            <div className="text-gray-main w-20">입도 날짜</div>
            <div className="font-medium">{recruitment.arrival_date}</div>
          </div>
          <div className="flex gap-8 text-lg font-semibold  pb-4">
            <div className="text-gray-main w-20">우대 조건</div>
            <div className="font-medium">
              {recruitment.preferred_qualifications}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

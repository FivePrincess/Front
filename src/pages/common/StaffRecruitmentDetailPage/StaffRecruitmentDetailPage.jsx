import React from "react";
import axios from "axios";
const recruitment = {
  recruitment_id: 123,
  title: "[제주도 애월] 구옥 주택 게스트하우스",
  hashtag: ["반려", "행복"],
  introduction:
    "안녕하세요. 구옥 주택 게스트하우스에서 1월, 2월 함께할 거주분들을 모집합니다.",
  contact: "010-1234-5678",
  work_location: "제주시 조천읍 함덕 16길 1-4 단독주택",
  recruitment_details: "좋은 게스트하우스입니다. 어쩌고...",
  created_date: "2025-01-22T12:00:00",
  updated_date: "2025-01-23T10:00:00",
  guesthouse_id: 123,
  recruitment_conditions: {
    recruitment_start_date: "2025-01-22",
    recruitment_end_date: "2025-02-01",
    arrival_date: "2025-01-25",
    female_number: 1,
    male_number: 1,
    preferred_qualifications: "초보 가능, 밝으신 분 환영",
    minimum_age: 22,
    maximum_age: 33,
  },
  employment_conditions: {
    work_type: "3일 근무 3일 휴무",
    employment_type: "계약직",
    employment_period: "1달 이상",
    benefits: "숙식 제공, 차량 제공, 수영장 무료 이용 제공",
  },
  photos: [
    "https://example.com/photo1.jpg",
    "https://example.com/photo2.jpg",
    "https://example.com/photo3.jpg",
  ],
};

//공고 상세 페이지
export default function StaffRecruitmentDetailPage() {
  return (
    <div className="flex-col gap-20 py-8">
      <div className="bg-gray-light flex p-20">
        {/** 간략한 소개 */}
        <div>
          <div className="flex-col">
            <div className="text-3xl font-bold">{recruitment.title}</div>
            <div className="flex gap-4 pt-4">
              {recruitment.hashtag.map((el, i) => (
                <div
                  key={i}
                  className="bg-purple-light p-1 px-2 rounded-lg text-sm"
                >
                  #{el}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-main"></div>
        </div>
        {/** 모집 조건 */}
        <div></div>
      </div>
      {/** 근무 조건 */}
      <div></div>
      {/** 근무지 정보 */}
      <div></div>
      {/** 근무지 사진 */}
      <div></div>
      {/** 상세 모집 내용 */}
    </div>
  );
}

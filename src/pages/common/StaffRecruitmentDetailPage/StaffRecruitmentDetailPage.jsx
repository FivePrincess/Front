import React from "react";
import RecruitmentCondition from "./components/RecruitmentCondition";
import WorkCondition from "./components/WorkCondition";
import MapSmall from "../../../components/MapSmall";
const recruitment = {
  recruitment_id: 123,
  title: "[제주도 애월] 구옥 주택 게스트하우스",
  hashtag: ["반려", "행복"],
  introduction:
    "안녕하세요. 구옥 주택 게스트하우스에서 1월, 2월 함께할 거주분들을 모집합니다.",
  contact: "010-1234-5678",
  work_location: "제주시 조천읍 함덕 16길 1-4 단독주택",
  latitude: 33.450701,
  longitude: 126.570667,
  recruitment_details: "좋은 게스트하우스입니다. 어쩌고...",
  guesthouse_id: 123,
  recruitment_conditions: {
    recruitment_start_date: "2025-01-22",
    recruitment_end_date: "2025-02-01",
    arrival_date: "2025-01-25",
    female_number: 1,
    male_number: 1,
    gender_neutral_number: 3,
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
    <div className="flex-col py-16">
      <div className="bg-white flex-col p-20 rounded-lg shadow-lg mb-8">
        {/** 간략한 소개 */}
        <div className="flex justify-between w-full pb-16">
          <div className="flex-col w-full">
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
            <div className="pt-8">{recruitment.introduction}</div>
          </div>
          <div className="bg-gray-main w-120 h-60 rounded-lg"></div>
        </div>
        {/** 모집 조건 */}
        <div>
          <RecruitmentCondition
            recruitment={recruitment.recruitment_conditions}
          />
        </div>
      </div>
      {/** 근무 조건 */}
      <div className="bg-white flex-col p-20 rounded-lg shadow-lg mb-8">
        <WorkCondition work={recruitment.employment_conditions} />
      </div>
      {/** 근무지 정보 */}
      <div className="bg-white flex-col p-20 rounded-lg shadow-lg h-[600px]">
        <div className="text-2xl font-semibold pb-8">근무지 정보</div>
        <div className="font-semibold pb-4">{recruitment.work_location}</div>
        <MapSmall
          center={{ lat: recruitment.latitude, lng: recruitment.longitude }}
          height="75%"
          width="100%"
          marks={[
            {
              position: {
                lat: recruitment.latitude,
                lng: recruitment.longitude,
              },
              content: recruitment.title,
            },
          ]}
        />
      </div>
      {/** 근무지 사진 */}
      <div></div>
      {/** 상세 모집 내용 */}
    </div>
  );
}

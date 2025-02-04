import React, { useState } from "react";
import SearchFilter from "./components/SearchFilter";
import RecruitmentList from "./components/RecruitmentList";
import AfterSearchFilter from "./components/AfterSearchFilter";

//공고 목록
export default function StaffRecruitmentPage() {
  const [recruitmentList, setRecruitmentList] = useState([
    //추후 api 연결
    {
      guesthouse_id: 123,
      recruitment_id: 456,
      guesthouse_name: "스테이블 게스트하우스",
      title: "가족같은 분위기인 게스트하우스에서 함께할 팀원 구합니다.",
      work_duration: "1~2개월 미만",
      average_rating: 9.1,
      rating_count: 5456,
    },
    {
      guesthouse_id: 789,
      recruitment_id: 101,
      guesthouse_name: "제주우하우스",
      title: "[주말] STAFF 채용합니다.",
      work_duration: "2~3개월 미만",
      average_rating: 9.1,
      rating_count: 5456,
    },
  ]);
  const [selectedLocation, setSelectedLocation] = useState(["서초", "대구"]); //선택한 지역
  const [selectedDuration, setSelectedDuration] = useState([]); //선택한 근무 기간
  return (
    <div className="flex-col justify-center items-center">
      <div className="py-8">
        {recruitmentList.length == 0 ? ( //검색 결과가 없는 경우
          <SearchFilter
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
          />
        ) : (
          //검색 결과가 있는 경우
          <div>
            <AfterSearchFilter
              setRecruitmentList={setRecruitmentList}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              selectedDuration={selectedDuration}
              setSelectedDuration={setSelectedDuration}
            />
            <div className="py-16">
              <RecruitmentList recruitmentList={recruitmentList} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import SearchFilter from "./components/SearchFilter";
import RecruitmentList from "./components/RecruitmentList";
import AfterSearchFilter from "./components/AfterSearchFilter";

//공고 목록
export default function StaffRecruitmentPage() {
  const [recruitmentList, setRecruitmentList] = useState([
    {
      guesthouse_id: 123,
      recruitment_id: 456,
      guesthouse_name: "스테이블 게스트하우스",
      title: "가족같은 분위기인 게스트하우스에서 함께할 팀원 구합니다.",
      work_duration: "1~2개월 미만",
      average_rating: 9.1,
      rating_count: 5456,
      thumbnail_image:
        "http://www.thecaravan.co.kr/news/photo/201509/4466_1.jpg",
      is_liked: true,
    },
    {
      guesthouse_id: 789,
      recruitment_id: 101,
      guesthouse_name: "제주우하우스",
      title: "[주말] STAFF 채용합니다.",
      work_duration: "2~3개월 미만",
      average_rating: 9.1,
      rating_count: 5456,
      thumbnail_image:
        "http://www.thecaravan.co.kr/news/photo/201509/4466_1.jpg",
      is_liked: false,
    },
  ]);
  const [selectedLocation, setSelectedLocation] = useState([]); //선택한 지역
  const [selectedDuration, setSelectedDuration] = useState([]); //선택한 근무 기간
  const [isSearchFilter, setIsSearchFilter] = useState(true);

  //광고 & 좋아요 수 많은 순대로 기본 공고 목록 가져오기
  useEffect(() => {}, []);

  useEffect(() => {
    console.log(isSearchFilter);
  }, [isSearchFilter]);

  return (
    <div className="flex-col justify-center items-center">
      <div className="py-8">
        {isSearchFilter ? ( //검색 결과가 없는 경우
          <SearchFilter
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
            setIsSearchFilter={setIsSearchFilter}
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
              setIsSearchFilter={setIsSearchFilter}
            />
          </div>
        )}
        <div className="py-16">
          <RecruitmentList recruitmentList={recruitmentList} />
        </div>
      </div>
    </div>
  );
}

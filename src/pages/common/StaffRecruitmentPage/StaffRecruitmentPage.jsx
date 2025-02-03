import React, { useState } from "react";
import SearchFilter from "./components/SearchFilter";
import RecruitmentList from "./components/RecruitmentList";
import AfterSearchFilter from "./components/AfterSearchFilter";

//공고 목록
export default function StaffRecruitmentPage() {
  const [recruitmentList, setRecruitmentList] = useState([""]);
  const [selectedLocation, setSelectedLocation] = useState(["서초", "대구"]); //선택한 지역
  const [selectedDuration, setSelectedDuration] = useState([]); //선택한 근무 기간
  return (
    <div className="flex-col justify-center items-center">
      <div className="py-8">
        {recruitmentList.length == [] ? (
          <SearchFilter
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
          />
        ) : (
          <AfterSearchFilter
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
          />
        )}
      </div>
      <div>
        <RecruitmentList />
      </div>
    </div>
  );
}

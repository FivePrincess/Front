import React from "react";
import SearchFilter from "./components/SearchFilter";
import RecruitmentList from "./components/RecruitmentList";

//공고 목록
export default function StaffRecruitmentPage() {
  return (
    <div>
      <div>
        <SearchFilter />
      </div>
      <div>
        <RecruitmentList />
      </div>
    </div>
  );
}

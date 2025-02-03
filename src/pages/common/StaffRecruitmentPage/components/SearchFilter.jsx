import React from "react";
import FilterBtnPurple from "../../../../components/FilterBtnPurple";
import FilterBtnWhite from "../../../../components/FilterBtnWhite";

//공고 지역 필터
export default function SearchFilter() {
  return (
    <div>
      <div>
        <div>검색 조건</div>
        <div className="flex gap-4">
          <FilterBtnWhite
            title={"지역"}
            action={() => console.log("클릭")}
            isSelected={true}
          />
          <FilterBtnWhite
            title={"근무 기간"}
            action={() => console.log("클릭")}
            isSelected={true}
          />
        </div>
      </div>
    </div>
  );
}

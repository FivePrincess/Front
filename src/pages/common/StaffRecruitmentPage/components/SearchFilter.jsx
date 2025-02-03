import React, { useState, useEffect } from "react";
import FilterBtnWhite from "../../../../components/FilterBtnWhite";
import WhiteBtn from "../../../../components/WhiteBtn";
import PurpleBtn from "../../../../components/PurpleBtn";
import LocationFilter from "./LocationFilter";
import DurationFilter from "./DurationFilter";

//공고 지역 필터
export default function SearchFilter() {
  const [selectedFilter, setSelectedFilter] = useState(""); //선택한 대분류
  const [selectedLocation, setSelectedLocation] = useState([]); //선택한 지역
  const [selectedDuration, setSelectedDuration] = useState([]); //선택한 근무 기간

  useEffect(() => {
    //필터링 조건 모니터링
    console.log(selectedDuration);
    console.log(selectedLocation);
  }, [selectedDuration, selectedLocation]);

  const resetFilter = () => {
    //검색 조건 초기화
    setSelectedFilter("");
    setSelectedLocation([]);
    setSelectedDuration([]);
  };

  const search = () => {
    //검색 수행
  };

  return (
    <div>
      <div className="flex-col">
        <div className="text-2xl py-2 font-semibold">검색 조건</div>
        {/** 검색 조건 분류 */}
        <div className="flex gap-4 py-2">
          <FilterBtnWhite
            title={"지역"}
            action={() => setSelectedFilter("location")}
            isSelected={"location" == selectedFilter}
          />
          <FilterBtnWhite
            title={"근무 기간"}
            action={() => setSelectedFilter("duration")}
            isSelected={"duration" == selectedFilter}
          />
        </div>

        {/** 검색 조건에 따른 세부 조건 */}
        <div className="py-2">
          {selectedFilter == "location" ? (
            <LocationFilter
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          ) : selectedFilter == "duration" ? (
            <DurationFilter
              selectedDuration={selectedDuration}
              setSelectedDuration={setSelectedDuration}
            />
          ) : (
            ""
          )}
        </div>

        {/** 초기화, 검색 */}
        <div className="flex gap-4 justify-center py-2">
          <WhiteBtn title={"초기화"} action={() => resetFilter()} />
          <PurpleBtn title={"검색"} action={() => search} />
        </div>
      </div>
    </div>
  );
}

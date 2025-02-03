import { useState } from "react";
import KakaoMap from "./KakaoMap";
import { durationData } from "../../../../data/durationData";
import FilterBtnPurple from "../../../../components/FilterBtnPurple";

export default function AfterSearchFilter({
  selectedLocation,
  setSelectedLocation,
  selectedDuration,
  setSelectedDuration,
}) {
  const handleSelect = (duration) => {
    if (selectedDuration.includes(duration)) {
      setSelectedDuration(selectedDuration.filter((d) => d !== duration));
    } else {
      setSelectedDuration([...selectedDuration, duration]);
    }
  };

  const handleRemoveLocation = (location) => {
    setSelectedLocation(selectedLocation.filter((loc) => loc !== location));
  };

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4">
        <div className="text-2xl py-2 font-semibold">검색 조건</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-[400px]">
            <KakaoMap
              center={{ lat: 33.450701, lng: 126.570667 }}
              height="100%"
              width="100%"
            />
          </div>
          <div className="space-y-6">
            {/* 지역 필터링 */}
            <div className="space-y-2">
              <div className="text-lg font-semibold">지역</div>
              <div className="bg-white border-2 border-purple-main rounded-lg p-6">
                <div className="flex flex-wrap gap-8 font-semibold">
                  {selectedLocation.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-3 py-1.5 bg-purple-light rounded-lg text-sm"
                    >
                      <span>{location}</span>
                      <button
                        onClick={() => handleRemoveLocation(location)}
                        className="ml-1 hover:text-purple-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 근무 기간 필터링 */}
            <div className="space-y-2">
              <div className="text-lg font-semibold">근무 기간</div>
              <div className="bg-white border-2 border-purple-main rounded-lg p-6">
                <div className="flex gap-8">
                  {durationData.durationList.map((duration, id) => (
                    <FilterBtnPurple
                      key={id}
                      title={duration}
                      action={() => handleSelect(duration)}
                      isSelected={selectedDuration.includes(duration)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

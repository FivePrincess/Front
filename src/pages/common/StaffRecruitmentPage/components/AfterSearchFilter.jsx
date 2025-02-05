import { useState } from "react";
import MapSmall from "../../../../components/MapSmall";
import { durationData } from "../../../../data/durationData";
import FilterBtnPurple from "../../../../components/FilterBtnPurple";
import PurpleBtn from "../../../../components/PurpleBtn";
import WhiteBtn from "../../../../components/WhiteBtn";
import MapModal from "../../../../components/MapModal";

export default function AfterSearchFilter({
  setRecruitmentList,
  selectedLocation,
  setSelectedLocation,
  selectedDuration,
  setSelectedDuration,
  setIsSearchFilter,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const resetFilter = () => {
    //검색 조건 초기화
    setSelectedLocation([]);
    setSelectedDuration([]);
    setRecruitmentList([]);
  };

  const search = () => {
    //검색 수행
  };

  return (
    <div className="">
      <div className="flex flex-col space-y-4">
        <div className="text-2xl py-2 font-semibold">검색 조건</div>
        <div className="grid grid-cols-2 gap-6">
          {/** 지도 */}
          <div className="w-full h-full relative">
            {/* 지도 */}
            <MapSmall
              center={{ lat: 33.450701, lng: 126.570667 }}
              height="100%"
              width="100%"
            />

            {/* 중앙 정렬된 버튼 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <PurpleBtn
                title={"지도 보기"}
                action={() => setIsModalOpen(true)}
              />
            </div>
          </div>

          {/** 필터링 */}
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
        {/** 초기화, 검색 */}
        <div className="flex gap-4 justify-center py-2">
          <WhiteBtn title={"초기화"} action={() => resetFilter()} />
          <PurpleBtn title={"검색"} action={() => search} />
        </div>
      </div>
      {/* 모달 실행 */}
      <MapModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        center={{ lat: 33.450701, lng: 126.570667 }}
      />
    </div>
  );
}

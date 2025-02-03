import React from "react";
import { MdInfoOutline } from "react-icons/md";
import FilterBtnPurple from "../../../../components/FilterBtnPurple";
import { durationData } from "../../../../data/durationData";

export default function DurationFilter({
  selectedDuration,
  setSelectedDuration,
}) {
  const handleSelect = (duration) => {
    if (selectedDuration.includes(duration)) {
      // 이미 선택된 경우 제거
      setSelectedDuration(selectedDuration.filter((d) => d !== duration));
    } else {
      // 선택되지 않은 경우 추가
      setSelectedDuration([...selectedDuration, duration]);
    }
  };

  return (
    <div className="border-2 border-purple-main rounded-lg p-8 pt-4">
      <div className="text-purple-main text-sm font-semibold flex gap-1 items-center justify-end">
        <MdInfoOutline />
        <div>최대 4개까지 선택 가능</div>
      </div>
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
  );
}

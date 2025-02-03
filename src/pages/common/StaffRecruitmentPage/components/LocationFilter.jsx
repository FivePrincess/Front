import { useState, useMemo } from "react";
import { addressData } from "../../../../data/addressData";

export default function LocationFilter({
  selectedLocation,
  setSelectedLocation,
}) {
  const [selectedCity, setSelectedCity] = useState(addressData.cities[0].name);

  const currentCityDistricts = useMemo(() => {
    return (
      addressData.cities.find((city) => city.name === selectedCity)
        ?.districts || []
    );
  }, [selectedCity]);

  const handleDistrictToggle = (districtName) => {
    setSelectedLocation((prev) =>
      prev.includes(districtName)
        ? prev.filter((d) => d !== districtName)
        : [...prev, districtName]
    );
  };

  // 지역 목록을 3등분하는 함수
  const splitDistricts = (districts) => {
    const chunkSize = Math.ceil(districts.length / 3);
    return [
      districts.slice(0, chunkSize),
      districts.slice(chunkSize, 2 * chunkSize),
      districts.slice(2 * chunkSize),
    ];
  };

  return (
    <div className="mx-auto bg-white border-2 border-purple-main rounded-lg">
      <div className="p-6 bg-gray-light rounded-t-lg">
        <div className="grid grid-cols-4 gap-6">
          <h2 className="text-sm font-semibold">시.구.군</h2>
          <h2 className="col-span-3 text-sm font-semibold">동.읍.면</h2>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 p-6">
        {/* 도시 선택 */}
        <div className="space-y-2">
          {addressData.cities.map((city) => (
            <label key={city.id} className="flex items-center">
              <input
                type="radio"
                name="city"
                value={city.name}
                checked={selectedCity === city.name}
                onChange={() => setSelectedCity(city.name)}
                className="sr-only peer"
              />
              <span className="w-full p-2 text-sm rounded cursor-pointer transition-colors peer-checked:bg-purple-light hover:bg-purple-light">
                {city.name}
              </span>
            </label>
          ))}
        </div>

        {/* 지역 선택 (3열로 나눔) */}
        {splitDistricts(currentCityDistricts).map(
          (columnDistricts, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {columnDistricts.map((district) => (
                <label key={district.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedLocation.includes(district.name)}
                    onChange={() => handleDistrictToggle(district.name)}
                    className="sr-only peer"
                  />
                  <span className="w-full p-2 text-sm rounded cursor-pointer transition-colors peer-checked:bg-purple-light hover:bg-purple-light">
                    {district.name}
                  </span>
                </label>
              ))}
            </div>
          )
        )}
      </div>

      {/* 선택된 지역 태그 */}
      <div className="flex flex-wrap gap-2 p-6 border-t-2 border-purple-main font-semibold">
        {selectedLocation.map((district) => (
          <div
            key={district}
            className="flex items-center gap-2 px-3 py-1.5 bg-purple-light rounded-lg text-sm"
          >
            <span>{`${selectedCity} ${district}`}</span>
            <button onClick={() => handleDistrictToggle(district)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

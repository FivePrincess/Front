import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function MapModal({
  isOpen,
  onClose,
  center = { lat: 33.450701, lng: 126.570667 },
  marks = [], //{ position: { lat: 37.5665, lng: 126.978 }, content: "서울시청"}
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      {/* 모달 박스 */}
      <div
        className="relative bg-white rounded-2xl shadow-xl p-6 w-[80%] h-[80%] flex flex-col animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 지도 */}
        <Map
          center={center}
          level={9}
          style={{ width: "100%", height: "100%" }}
        >
          {marks.map((mark, index) => (
            <MapMarker key={index} position={mark.position}>
              <div className="bg-purple-main p-1 text-white font-semibold rounded-md">
                {mark.content}
              </div>
            </MapMarker>
          ))}
        </Map>
      </div>
    </div>
  );
}

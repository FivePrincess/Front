import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap({
  center = { lat: 33.450701, lng: 126.570667 },
  marks = [],
  height = "300px",
  width = "500px",
}) {
  return (
    <Map
      center={center} // center를 props로 받아와서 사용
      style={{ width: `${width}`, height: `${height}` }}
      level={10} // 확대/축소 레벨
    >
      {marks.map((mark, index) => (
        <MapMarker key={index} position={mark.position}>
          <div className="bg-purple-main">{mark.content}</div>
        </MapMarker>
      ))}
    </Map>
  );
}

export default KakaoMap;

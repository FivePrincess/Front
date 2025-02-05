import React from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

function MapSmall({
  center = { lat: 33.450701, lng: 126.570667 },
  marks = [],
  height = "300px",
  width = "500px",
}) {
  return (
    <Map
      center={center}
      style={{ width, height, borderRadius: "10px" }}
      level={10}
    >
      {marks.map((mark, index) => (
        <React.Fragment key={index}>
          {/* 기본 마커 */}
          <MapMarker position={mark.position} />

          {/* 커스텀 오버레이 */}
          <CustomOverlayMap position={mark.position} yAnchor={1}>
            <div
              style={{
                position: "relative",
                bottom: "85px",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "6px",
                padding: "10px 15px",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {mark.content}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "-12px",
                  width: "22px",
                  height: "12px",
                  transform: "translateX(-50%)",
                  backgroundImage:
                    "url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')",
                  backgroundSize: "cover",
                }}
              />
            </div>
          </CustomOverlayMap>
        </React.Fragment>
      ))}
    </Map>
  );
}

export default MapSmall;

import React, { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

export default function RecruitmentList({ recruitmentList }) {
  const navigate = useNavigate();
  // 좋아요 상태를 관리하는 state
  const [list, setList] = useState(recruitmentList);

  // 좋아요 추가 API 호출 (나중에 실제 API 연결 예정)
  const addLike = (id) => {
    console.log(`좋아요 추가: ${id}`);
    // TODO: API 요청 로직 추가
  };

  // 좋아요 삭제 API 호출 (나중에 실제 API 연결 예정)
  const deleteLike = (id) => {
    console.log(`좋아요 삭제: ${id}`);
    // TODO: API 요청 로직 추가
  };

  // 좋아요 토글 함수
  const toggleLike = (index) => {
    setList((prevList) =>
      prevList.map((recruitment, i) => {
        if (i === index) {
          const updated = { ...recruitment, is_liked: !recruitment.is_liked };

          if (updated.is_liked) {
            addLike(updated.recruitment_id); // 좋아요 추가 API 호출
          } else {
            deleteLike(updated.recruitment_id); // 좋아요 삭제 API 호출
          }

          return updated;
        }
        return recruitment;
      })
    );
  };

  return (
    <div>
      <div className="text-2xl font-semibold pb-8">채용 중인 게스트하우스</div>
      <div>
        {list.map((recruitment, index) => (
          <div
            key={recruitment.recruitment_id}
            className="flex gap-4 p-4 rounded-lg hover:shadow-lg duration-300"
            onClick={() => {
              navigate(`./${recruitment.recruitment_id}`);
            }}
          >
            {/* 이미지 박스 (마우스 오버 시 확대) */}
            <img
              src={recruitment.thumbnail_image}
              alt="게스트하우스 썸네일"
              className="w-full md:w-80 h-40 bg-gray-300 rounded-lg flex items-center justify-center 
                         transition-transform duration-300 hover:scale-105"
            />

            {/* 내용 영역 */}
            <div className="w-full flex flex-col justify-between">
              <div>
                {/* 게스트하우스 이름 + 하트 아이콘 */}
                <div className="flex justify-between items-center">
                  <div className="text-sm font-semibold tracking-wide">
                    {recruitment.guesthouse_name}
                  </div>
                  <div
                    className="flex items-center text-2xl pr-2 cursor-pointer"
                    onClick={() => toggleLike(index)}
                  >
                    {recruitment.is_liked ? (
                      <IoIosHeart className="text-red-500 transition-colors duration-200" />
                    ) : (
                      <IoIosHeartEmpty className="text-gray-400 transition-colors duration-200 hover:text-red-500" />
                    )}
                  </div>
                </div>

                {/* 제목 */}
                <div className="font-semibold text-lg leading-snug pt-4">
                  {recruitment.title}
                </div>
              </div>

              <div>
                {/* 근무 기간 */}
                <div className="text-sm text-gray-main font-semibold">
                  근무 기간 {recruitment.work_duration}
                </div>
                {/* 별점 컴포넌트 */}
                <div className="py-2">
                  <Rating
                    rate={recruitment.average_rating}
                    cnt={recruitment.rating_count}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

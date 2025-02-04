import React from "react";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import Rating from "./Rating";

//api 명세서 다시 작성해야 할 듯
/**
 * 1. 비로그인 상태인 경우, 그냥 가져오면 됨 + 썸네일 이미지 파일명 속성 추가
 * 2. 로그인 상태인 경우, 각 리스트에 대한 좋아요 상태 + 썸네일 이미지 파일명 속성 추가
 */

export default function RecruitmentList({ recruitmentList }) {
  const c = 0;
  return (
    <div>
      <div className="text-2xl font-semibold pb-8">채용 중인 게스트하우스</div>
      <div>
        {recruitmentList.map((recruitment, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 rounded-lg hover:shadow-lg duration-300"
          >
            {/* 이미지 박스 */}
            <div className="w-full md:w-80 h-40 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">이미지</span>
            </div>

            {/* 내용 영역 */}
            <div className="w-full flex flex-col justify-between">
              <div>
                {/* 게스트하우스 이름 + 하트 아이콘 */}
                <div className="flex justify-between items-center">
                  <div className="text-sm font-semibold tracking-wide">
                    {recruitment.guesthouse_name}
                  </div>
                  <div className="flex items-center text-2xl pr-2">
                    {c == 0 ? (
                      <IoIosHeart className="text-red-500" />
                    ) : (
                      <IoIosHeartEmpty className="text-gray-400" />
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

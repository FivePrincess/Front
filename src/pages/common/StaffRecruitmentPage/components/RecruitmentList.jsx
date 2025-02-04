import React from "react";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import Rating from "./Rating";

export default function RecruitmentList({ recruitmentList }) {
  const c = 0;
  return (
    <div>
      <div className="text-2xl font-semibold pb-8">채용 중인 게스트하우스</div>
      <div>
        {/** 요소 한 개 */}
        <div className="flex gap-4 p-4 rounded-lg hover:shadow-lg duration-300">
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
                  게스트하우스 이름
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
                가족같은 분위기인 게스트하우스에서 함께할 팀원 구합니다.
              </div>
            </div>

            <div>
              {/* 근무 기간 */}
              <div className="text-sm text-gray-main font-semibold">
                근무 기간 1-2개월 미만
              </div>
              {/* 별점 컴포넌트 */}
              <div className="py-2">
                <Rating rate={1.23} cnt={1234} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

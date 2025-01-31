/**
 * To Do
 * - 회원 로그인 상태에 따라 common(공용), staff(구직자), guesthouse(구인자)러 설정
 * - role에 따라 화면 UI 조정정
 * - 검색 함수 구현
 */

import React, { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import PurpleBtn from "../components/PurpleBtn";
import YellowBtn from "../components/YellowBtn";

export default function Header() {
  const [searchParam, setSearchParam] = useState("");
  const [role, setRole] = useState("common"); //비로그인: common, 구인자: staff, 구직자: guesthouse
  const navigate = useNavigate();

  const searchGuestHouse = () => {
    //게스트하우스 검색 함수
    console.log("검색어", searchParam);
    setSearchParam("");
  };

  return (
    <div className="px-32 py-4 border-b-1 border-gray-stroke">
      {/** 로그인, 회원가입, 언어 설정 버튼 or 로그아웃, 마이페이지, 언어 설정 버튼 */}
      <div className="flex justify-end gap-4 text-gray-main font-semibold">
        {/** 로그인 X인 경우 */}
        {role == "common" ? (
          <div className="flex gap-4">
            <div
              className="hover:text-purple-medium duration-300 cursor-pointer"
              onClick={() => {
                navigate("/user/login");
              }}
            >
              로그인
            </div>
            <div
              className="hover:text-purple-medium duration-300 cursor-pointer"
              onClick={() => {
                navigate("/user/signUp");
              }}
            >
              회원가입
            </div>
          </div>
        ) : (
          ""
        )}
        {/** 로그인 O인 경우 */}
        {role != "common" ? (
          <div className="flex gap-4">
            <div className="hover:text-purple-medium duration-300 cursor-pointer">
              로그아웃
            </div>
            <div className="text-2xl hover:text-purple-medium duration-300 cursor-pointer">
              <FaUserCircle />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="text-2xl hover:text-purple-medium duration-300 cursor-pointer">
          <GrLanguage />
        </div>
      </div>

      {/** 로고 및 검색창, 기능 버튼 */}
      <div className="text-purple-main flex justify-between items-end">
        <div className="flex items-end gap-4">
          <div
            className="flex items-end hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => {
              navigate("/main");
            }}
          >
            <img
              src="../../public/img/logo.png"
              alt="구집 로고 이미지"
              className="object-cover h-16"
            />
            <div className="font-extrabold text-2xl">구집</div>
          </div>
          <div className="border-2 w-96 py-1 px-4 rounded-2xl text-2xl flex items-center">
            <input
              type="text"
              className="border-none outline-none flex-grow text-sm"
              placeholder="게스트하우스를 검색하세요"
              value={searchParam}
              onChange={(e) => {
                setSearchParam(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchGuestHouse();
                }
              }}
            />
            <IoSearch
              className="text-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                searchGuestHouse();
              }}
            />
          </div>
        </div>
        <div className="flex gap-4">
          {role != "guesthouse" ? (
            <PurpleBtn
              title={"이력서 등록"}
              action={() => {
                navigate("/staff/resume/form");
              }}
            />
          ) : (
            ""
          )}
          {role != "staff" ? (
            <YellowBtn
              title={"공고 등록"}
              action={() => {
                navigate("/guesthouse/form");
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      {/** 메뉴 바 */}
      <div className="flex text-xl text-purple-light gap-8 font-semibold mt-8 ">
        <div className="flex justify-center items-center gap-1 hover:text-purple-main duration-300 cursor-pointer">
          <IoMenu />
          전체 메뉴
        </div>
        <div
          className="hover:text-purple-main duration-300 cursor-pointer"
          onClick={() => navigate("/guesthouse")}
        >
          게스트하우스
        </div>
        <div
          className="hover:text-purple-main duration-300 cursor-pointer"
          onClick={() => navigate("/recruitment")}
        >
          스텝공고
        </div>
        <div className="hover:text-purple-main duration-300 cursor-pointer">
          커뮤니티
        </div>
        <div className="hover:text-purple-main duration-300 cursor-pointer">
          동행
        </div>
      </div>
    </div>
  );
}

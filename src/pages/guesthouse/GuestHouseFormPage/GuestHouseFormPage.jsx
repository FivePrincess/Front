import React from "react";
import SimpleHeader from '../../../layout/SimpleHeader';
import YellowBtn from "../../../components/YellowBtn";
import WhiteBtn from "../../../components/WhiteBtn";
import Footer from '../../../layout/Footer';


//게스트하우스 등록 폼
export default function GuestHouseFormPage() {
  return (
    <div className="flex flex-col min-h-screen"> {/* 전체 div */}
      <header> {/* 헤더 */}
        <SimpleHeader />
      </header>
      <main className="flex-grow min-h-screen"> {/* 메인 */}
        <div> {/* 게스트하우스 등록 div */}
          <div> {/* 게스트하우스 등록 헤더 div */}
            <div> {/* 헤더명 div */}
              게스트하우스 등록
            </div>
            <div> {/* 선 div */}
              선
            </div>
          </div>
          <div> {/* 게스트하우스명 div */}
            <div> {/* 섹션명 div */}
              게스트하우스명
            </div>
            <div> {/* 입력창 div */}
              <input
                type="text"
                placeholder="게스트하우스 이름을 입력해주세요."
              />
            </div>
          </div>
          <div> {/* 위치 div */}
            <div> {/* 섹션명 div */}
              위치
            </div>
            <div> {/* 게스트하우스 위치 div */}
              게스트하우스 위치
            </div>
            <div> {/* 주소 찾기 div */}
              <YellowBtn />
            </div>
          </div>
          <div> {/* 전화 번호 div */}
            <div> {/* 섹션명 div */}
              전화 번호
            </div>
            <div> {/* 입력창 div */}
              <input
                type="text"
                placeholder="게스트하우스에 연락할 수 있는 전화 번호를 입력해주세요."
              />
            </div>
          </div>
          <div> {/* 소개 요약 div */}
            <div> {/* 섹션명 div */}
              소개 요약
            </div>
            <div> {/* 입력창 div */}
              <input
                type="text"
                placeholder="간략하게 들어갈 게스트하우스 소개를 200자 내로 작성해주세요."
              />
            </div>
          </div>
          <div> {/* 게스트하우스 사진 div */}
            <div> {/* 섹션명 div */}
              게스트하우스 사진
            </div>
            <div> {/* 설명 div */}
              객실 사진 및 게스트하우스 사진을 추가해주세요.
            </div>
            <div> {/* 사진 div */}
              <div> {/* 사진 추가 div */}
                사진 추가
              </div>
              <div> {/* 사진들 div */}
                <div>
                  사진1
                </div>
                <div>
                  사진2
                </div>
                <div>
                  사진3
                </div>
              </div>
            </div>
          </div>
        </div>
        <div> {/* 게스트하우스 상세 소개 div */}
          <div> {/* 게스트하우스 상세 소개 헤더 div */}
            <div> {/* 헤더명 div */}
              게스트하우스 상세 소개
            </div>
            <div> {/* 선 div */}
              선
            </div>
          </div>
          <div> {/* 입력창 div */}
            <input
              type="text"
              placeholder="자유롭게 게스트하우스에 대한 상세 소개 내용을 작성해주세요.\n ex) 체크인 안내, 주변 인프라, 조식 안내 등"
            />
          </div>
        </div>
        <div> {/* 게스트하우스 등록 div */}
          <YellowBtn />
        </div>
        <div> {/* 임시저장 div */}
          <WhiteBtn />
        </div>
        <div> {/* 미리보기 div */}
          <WhiteBtn />
        </div>
      </main>
      <footer> {/* 푸터 */}
        <Footer />
      </footer>
    </div>
  );
}

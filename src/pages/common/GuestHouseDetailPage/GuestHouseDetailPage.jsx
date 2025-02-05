import React from "react";
import SimpleHeader from '../../../layout/SimpleHeader';
import PurpleBtn from "../../../components/PurpleBtn";
import Footer from '../../../layout/Footer';

//게스트하우스 상세 페이지
export default function GuestHouseDetailPage() {
  return (
    <div className="flex flex-col min-h-screen"> {/* 전체 div */}
      <header> {/* 헤더 */}
        <SimpleHeader />
      </header>
      <main className="flex-grow min-h-screen"> {/* 메인 */}
        <div> {/* 게스트하우스 이미지, 게스트하우스 정보, 룸 정보 div */}
          <div> {/* 게스트하우스 이미지 div */}
            게스트하우스 이미지
          </div>
          <div> {/* 게스트하우스 정보 div */}
            <div> {/* 게스트하우스명 div */}
              게스트하우스명
            </div>
            <div> {/* 평점 div */}
              별 아이콘 + 평점
            </div>
            <div> {/* 위치 div */}
              위치 아이콘 + 위치
            </div>
            <div> {/* 전화번호 div */}
              전화 아이콘 + 전화번호
            </div>
            <div> {/* 간단한 소개 div */}
              간단한 소개
            </div>
            <div> {/* 스텝 지원하러가기 div */}
              <PurpleBtn />
            </div>
          </div>
          <div> {/* 룸 정보 div */}
            <div> {/* 룸1 div */}
              <div> {/* 룸1 이미지 div */}
                룸1 이미지
              </div>
              <div> {/* 룸1 이름 div */}
                룸1 이름
              </div>
              <div> {/* 룸1 가격대 div */}
                룸1 가격대
              </div>
            </div>
            <div> {/* 룸2 div */}
              <div> {/* 룸2 이미지 div */}
                룸2 이미지
              </div>
              <div> {/* 룸2 이름 div */}
                룸2 이름
              </div>
              <div> {/* 룸22 가격대 div */}
                룸2 가격대
              </div>
            </div>
            <div> {/* 룸3 div */}
              <div> {/* 룸3 이미지 div */}
                룸3 이미지
              </div>
              <div> {/* 룸3 이름 div */}
                룸3 이름
              </div>
              <div> {/* 룸3 가격대 div */}
                룸3 가격대
              </div>
            </div>
          </div>
        </div>
        <div> {/* 게스트하우스 소개 div */}
          <div> {/* 섹션명 div */}
            게스트하우스 소개
          </div>
          <div> {/* 상세설명 div */}
            상세설명
          </div>
        </div>
        <div> {/* 객실 사진 div */}
          <div> {/* 섹션명 div */}
            객실 사진
          </div>
          <div> {/* 객실 사진들 div */}
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
        <div> {/* 찾아오는 길 div */}
          <div> {/* 섹션명 div */}
            찾아오는 길
          </div>
          <div> {/* 지도 div */}
            지도
          </div>
        </div>
        <div> {/* 리뷰 div */}
          <div> {/* 섹션명 div */}
            리뷰
          </div>
          <div> {/* 평점 div */}
            별 아이콘 + 평점
          </div>
          <div> {/* 후기 div */}
            후기 개수
          </div>
          <div> {/* 평점 막대 수치 div */}
            <div>
              5.0 + 막대
            </div>
            <div>
              4.0 + 막대
            </div>
            <div>
              3.0 + 막대
            </div>
            <div>
              2.0 + 막대
            </div>
            <div>
              1.0 + 막대
            </div>
          </div>
          <div> {/* 평가 기준 div */}
            <div> {/* 청결도 div */}
              <div> {/* 기준명 div */}
                청결도
              </div>
              <div> {/* 평점 div */}
                평점
              </div>
              <div> {/* 아이콘 div */}
                아이콘
              </div>
            </div>
            <div> {/* 의사소통 div */}
              <div> {/* 기준명 div */}
                의사소통
              </div>
              <div> {/* 평점 div */}
                평점
              </div>
              <div> {/* 아이콘 div */}
                아이콘
              </div>
            </div>
            <div> {/* 위치 div */}
              <div> {/* 기준명 div */}
                위치
              </div>
              <div> {/* 평점 div */}
                평점
              </div>
              <div> {/* 아이콘 div */}
                아이콘
              </div>
            </div>
            <div> {/* 재미 div */}
              <div> {/* 기준명 div */}
                재미
              </div>
              <div> {/* 평점 div */}
                평점
              </div>
              <div> {/* 아이콘 div */}
                아이콘
              </div>
            </div>
          </div>
          <div> {/* 이용자 리뷰 div */}
            <div> {/* 리뷰1 div */}
              <div> {/* 이용자 이미지 div */}
                이용자 이미지
              </div>
              <div> {/* 이용자 이름 div */}
                이용자 이름
              </div>
              <div> {/* 이용자 별점 div */}
                이용자 별점(별 아이콘)
              </div>
              <div> {/* 리뷰 상세 div */}
                리뷰 상세
              </div>
            </div>
            <div> {/* 리뷰2 div */}
              <div> {/* 이용자 이미지 div */}
                이용자 이미지
              </div>
              <div> {/* 이용자 이름 div */}
                이용자 이름
              </div>
              <div> {/* 이용자 별점 div */}
                이용자 별점(별 아이콘)
              </div>
              <div> {/* 리뷰 상세 div */}
                리뷰 상세
              </div>
            </div>
            <div> {/* 리뷰3 div */}
              <div> {/* 이용자 이미지 div */}
                이용자 이미지
              </div>
              <div> {/* 이용자 이름 div */}
                이용자 이름
              </div>
              <div> {/* 이용자 별점 div */}
                이용자 별점(별 아이콘)
              </div>
              <div> {/* 리뷰 상세 div */}
                리뷰 상세
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer> {/* 푸터 */}
        <Footer />
      </footer>
    </div>
  );
}

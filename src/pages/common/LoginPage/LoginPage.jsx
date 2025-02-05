import { useState } from "react";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("개인 회원");

  return (
    <div className={styles.loginContainer}>
      {/* 왼쪽 섹션 */}
      <div className={styles.loginLeft}>
        <h1 className={styles.loginTitle}>로그인 후 다양한 서비스를 이용해 보세요</h1>
        <p className={styles.loginSubtitle}>
          아직 구집의 회원이 아니라면, <span className={styles.signupLink}>회원가입</span>을 해주세요
        </p>

        {/* 탭 */}
        <div className={styles.loginTabs}>
          <button
            className={`${styles.tab} ${activeTab === "개인 회원" ? styles.active : ""}`}
            onClick={() => setActiveTab("개인 회원")}
          >
            개인 회원
          </button>
          <button
            className={`${styles.tab} ${activeTab === "게스트하우스 주인" ? styles.active : ""}`}
            onClick={() => setActiveTab("게스트하우스 주인")}
          >
            게스트하우스 주인
          </button>
        </div>

        {/* 로그인 폼 */}
        <div className={styles.loginForm}>
          <div className={styles.inputContainer}>
            <input type="text" placeholder=" 아이디" className={styles.loginInput} />
            <input type="password" placeholder=" 비밀번호" className={styles.loginInput} />
          </div>
          <button className={styles.loginButton}>로그인</button>
        </div>

        {/* 하단 링크 */}
        <div className={styles.loginLinks}>
          <span>회원가입</span>
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
        </div>

        {/* 소셜 로그인 */}
        <div className={styles.socialLogin}>
            <img src="/img/login/Naver.svg" alt="네이버" />
            <img src="/img/login/Kakao.svg" alt="카카오" />
        </div>
      </div>

      {/* 오른쪽 섹션 */}
      <div className={styles.loginRight}>
        <div className={styles.serviceTitle}>개인 회원을 위한 서비스는?</div>

        <div className={styles.serviceList}>
          <div className={styles.serviceItem}>
            <div className={styles.iconWrapper}>
              <img src="/img/login/Search.svg" style={{ width: '40px', height: '40px' }} />
            </div>
            <div className={styles.serviceContent}>
              <h3>간편한 게스트하우스 찾기</h3>
              <p>지역별 검색을 통해 게스트하우스를 찾고,</p>
              <p>리뷰 및 상세 정보를 확인할 수 있어요.</p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.iconWrapper}>
              <img src="/img/login/Word.svg" style={{ width: '40px', height: '40px' }} />
            </div>
            <div className={styles.serviceContent}>
              <h3>게스트하우스 채용 정보 모아보기</h3>
              <p>채용 중인 게스트하우스를 모아볼 수 있어요.</p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.iconWrapper}>
              <img src="/img/login/Click.svg" style={{ width: '40px', height: '40px' }} />
            </div>
            <div className={styles.serviceContent}>
              <h3>원클릭 지원하기</h3>
              <p>이력서만 있으면 클릭 한 번에 입사 지원 끝!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

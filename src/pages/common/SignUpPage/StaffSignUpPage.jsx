import styles from "./SignUpPage.module.css"
import { useState } from "react";

export default function StaffSignUpPage() {
  
  const [selectedGender, setSelectedGender] = useState(""); // 선택한 성별 저장

  return (
    <div className={styles.SignupContainer}>
      <h1 className={styles.SignupTitle}>개인회원 가입</h1>

      <div className={styles.termsSection}>
        <div className={styles.termsItem}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" />
            <span>이용약관에 전체 동의</span>
          </label>
        </div>

        <div className={styles.termsItem}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" />
            <span>
              <span className={styles.required}>[필수]</span> 만 15세 이상입니다.
            </span>
          </label>
        </div>

        <div className={styles.termsItem}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" />
            <span>
              <span className={styles.required}>[필수]</span> 서비스 이용약관 동의
            </span>
          </label>
          <button className={styles.termsArrow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className={styles.termsItem}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" />
            <span>
              <span className={styles.required}>[필수]</span> 개인정보 수집 및 이용 동의
            </span>
          </label>
          <button className={styles.termsArrow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <p className={styles.termsNotice}>
          * 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며 동의 거부 시에는 회원가입이 불가능합니다.
        </p>

      <div className={styles.formSection}>
        <input type="text" placeholder="아이디(4~15자 영문 숫자)" className={styles.inputField} />
        <input type="password" placeholder="비밀번호 8-15자의 영문/숫자 또는 특수문자 조합" className={styles.inputField} />
        <input type="password" placeholder="비밀번호 재입력" className={styles.inputField} />
        <input type="email" placeholder="이메일" className={styles.inputField} />
        <input type="text" placeholder="이름" className={styles.inputField} />
        
        <div className={styles.genderSection}>
          <input type="text" placeholder="나이" className={styles.inputField} />
          <div className={styles.genderButtons}>
            <button className={`${styles.genderButton} ${selectedGender === "남자" ? styles.active : ""}`}
              onClick={() => setSelectedGender("남자")}>
              남자
            </button>
            <button className={`${styles.genderButton} ${selectedGender === "여자" ? styles.active : ""}`}
              onClick={() => setSelectedGender("여자")}>
              여자
            </button>
          </div>
        </div>

        <div className={styles.phoneSection}>
          <input type="text" placeholder="휴대폰" className={styles.inputField} />
          <button className={`${styles.verifyButton} ${styles.purple}`}>인증번호 요청</button>
        </div>

        <div className={styles.phoneSection}>
          <input type="text" placeholder="인증번호" className={styles.inputField} />
          <button className={`${styles.verifyButton} ${styles.purple}`}>인증하기</button>
        </div>
        
      </div>

      <button className={`${styles.submitButton} ${styles.purple}`}>가입하기</button>
    </div>
  );
}

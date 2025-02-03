import styles from "./SignUpPage.module.css"

//개인회원 가입 페이지
export default function StaffSignUpPage() {

  return (
    <div className={styles.SignupContainer}>
      <h1 className={styles.SignupTitle}>게스트하우스 회원 가입</h1>

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
        <input type="text" placeholder="사업자번호" className={styles.inputField} />

        <div className={styles.phoneSection}>
          <input type="text" placeholder="휴대폰" className={styles.inputField} />
          <button className={`${styles.verifyButton} ${styles.yellow}`}>인증번호 요청</button>
        </div>

        <div className={styles.phoneSection}>
          <input type="text" placeholder="인증번호" className={styles.inputField} />
          <button className={`${styles.verifyButton} ${styles.yellow}`}>인증하기</button>
        </div>
        
      </div>

      <button className={`${styles.submitButton} ${styles.yellow}`}>가입하기</button>
    </div>
  );
}
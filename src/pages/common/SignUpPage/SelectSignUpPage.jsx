import styles from "./SelectSignUpPage.module.css"; // ✅ 변경된 import 문

export default function SelectSignUpPage() {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupHeader}>
        <h1>구직의 회원가입을 환영합니다.</h1>
        <p>회원가입 후, 다양한 서비스를 이용할 수 있어요.</p>
      </div>

      <div className={styles.signupCards}>
        {/* 개인 회원 카드 */}
        <div className={styles.signupCard}>
          <div className={styles.cardContent}>
            <div className={styles.iconContainer}>
              <img src="/img/signup/signup-employee.svg" alt="개인 회원" />
            </div>
            <h2>개인 회원</h2>
            <p>게스트하우스 일자리를 찾는 구직자</p>

            <button className={`${styles.signupButton} ${styles.purple}`}>개인회원 가입하기</button>
          </div>
        </div>

        {/* 게스트하우스 회원 카드 */}
        <div className={styles.signupCard}>
          <div className={styles.cardContent}>
            <div className={`${styles.iconContainer} ${styles.yellow}`}>
              <img src="/img/signup/signup-employer.svg" alt="게스트하우스 회원" />
            </div>

            <h2>게스트하우스 회원</h2>
            <p>게스트하우스 알바생을 구하는 사장님</p>

            <button className={`${styles.signupButton} ${styles.yellow}`}>게스트하우스 회원 가입하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

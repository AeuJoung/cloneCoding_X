import RoundButton from "./_common/roundButton"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.bigUpSection}>
        <section className={styles.leftSection}>
          <a href="#" className={styles.logo}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
              </svg>
          </a>
        </section>
        <section className={styles.rightSection}>
          <div className={styles.rightSection_inner}>
            <h1>지금 일어나고 있는 일</h1>
            <h3>지금 가입하세요.</h3>
            <div className={styles.loginBox}>
              <RoundButton props={{color : 'black', linkText : '/#', innerText : 'Google 계정으로 가입하기', iconImgName : '/google.svg'}}/>
              <RoundButton props={{color : 'black', linkText : '/#', innerText : 'Apple에서 가입하기', iconImgName : '/apple.svg'}}/>
              <div className={styles.orText}>
                <span className={styles.grayLine}><div></div></span>
                <p>또는</p>
                <span className={styles.grayLine}><div></div></span>
              </div>
              <RoundButton props={{color : 'white', linkText : '/#', innerText : '계정 만들기', bgcolor:'#1d9bf0'}}/>
              <p className={styles.guidance}>가입하시려면 <a href="#">쿠키 사용</a>을 포함해 <a href="#">이용약관</a>과 <a href="#">개인정보 처리 방침</a>에 동의하셔야 합니다.</p>
            </div>
            <div className={styles.areYouTwiiter}>
              <h4>이미 트위터에 가입하셨나요?</h4>
              <RoundButton props={{color : '#1d9bf0', linkText : '/#', innerText : '로그인', bgcolor:'white'}}/>
            </div>
          </div>
        </section>
      </section>
      <footer className={styles.footerMenu}>
        <nav>
          <ul>
            <li>소개</li>
            <li>X 앱 다운로드하기</li>
            <li>고객센터</li>
            <li>이용약관</li>
            <li>개인정보 처리방침</li>
            <li>쿠키 정책</li>
            <li>접근성</li>
            <li>광고 정보</li>
            <li>블로그</li>
            <li>채용</li>
            <li>브랜드 리소스</li>
            <li>광고</li>
            <li>마케팅</li>
            <li>비즈니스용 X</li>
            <li>개발자</li>
            <li>디렉터리</li>
            <li>설정</li>
            <li>© 2024 X Corp.</li>
          </ul>
        </nav>
      </footer>
    </main>
  );
}

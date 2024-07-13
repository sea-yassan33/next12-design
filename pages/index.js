import homeStyles from '../styles/Home.module.css'
import Image from "next/image";

const styles ={
  navStyle : "navbar navbar-expand-lg navbar-dark pd-back-color", 
};


export default function Home() {
  return (
    <div>
      <nav className={`${styles.navStyle} ${homeStyles.pdBgcolor}`}>
        <div className={'container-fluid'}>
          <a className={`navbar-brand`} href="#">
            <Image src="https://i.gyazo.com/e4e71335ce331b27a3e3151ff99dccfe.png" width="60" height="60" className="d-inline-block align-top mr-1" alt="Logo"/>
            デザイン集
          </a>
        </div>
      </nav>
      <main className={'container-fluid'}>
        <div className={`row`}>
          <div className={`col-3 ${homeStyles.pdSideMenu}`}>
            <p>サイドメニュー<br/>(リンク集)</p>
          </div>
          <div className={`col-9 ${homeStyles.pdMainMenu}`}>
            <p>メイン</p>
          </div>
        </div>
      </main>
    </div>
  )
}

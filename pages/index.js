import homeStyles from '../styles/Home.module.css'
import Image from "next/image";
import Link from 'next/link';

const styles ={
  navStyle : "navbar navbar-expand-lg navbar-dark pd-back-color", 
  cardFoot: "card-footer text-end small text-muted",
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
        
        {/* 作成後削除 */}
        <div className={`row`}>
          <div className={`col-3 ${homeStyles.pdSideMenu}`}>
            <p>サイドメニュー<br/>(リンク集)</p>
          </div>
          <div className={`col-9 ${homeStyles.pdMainMenu}`}>
            <h1>デザイン・テンプレート集</h1>
            <div className='card-group mb-3'>
              <div className='card m-1'>
                <Link href="/sample01/">
                  <Image src="https://i.gyazo.com/ab3e7dbcbf047943d72849ee49f68b2e.png" width="150" height="150" className='card-img-top'/>
                </Link>
                <div className='card-body'>
                  <Link href="/sample01/" className={`card-title h2`}>sample01</Link>
                  <p className='card-text'>コーポレートサイトのトップ画面作成</p>
                </div>
                <div className={`${styles.cardFoot}`}>Update 2024/07/13</div>
              </div>
              <div className='card m-1'>
                <Link href="#">
                  <Image src="/img/preparatImg.png" width="150" height="150" className='card-img-top'/>
                </Link>
                <div className='card-body'>
                  <Link href="#" className={`${homeStyles.pdTextSnone} card-title h2`}>sample02</Link>
                  <p className='card-text'>概要説明(準備中)</p>
                </div>
                <div className={`${styles.cardFoot}`}>Update 20**/**/**</div>
              </div>
              <div className='card m-1'>
                <Link href="#">
                  <Image src="/img/preparatImg.png" width="150" height="150" className='card-img-top'/>
                </Link>
                <div className='card-body'>
                  <Link href="#" className={`${homeStyles.pdTextSnone} card-title h2`}>sample03</Link>
                  <p className='card-text'>概要説明(準備中)</p>
                </div>
                <div className={`${styles.cardFoot}`}>Update 20**/**/**</div>
              </div>
            </div>
            <div className='card-group mb-3'>
              <div className='card m-1'>
                <Link href="#">
                  <Image src="/img/preparatImg.png" width="150" height="150" className='card-img-top'/>
                </Link>
                <div className='card-body'>
                  <Link href="#" className={`${homeStyles.pdTextSnone} card-title h2`}>sample04</Link>
                  <p className='card-text'>概要説明(準備中)</p>
                </div>
                <div className={`${styles.cardFoot}`}>Update 20**/**/**</div>
              </div>
              <div className='card m-1'>
                <Link href="#">
                  <Image src="/img/preparatImg.png" width="150" height="150" className='card-img-top'/>
                </Link>
                <div className='card-body'>
                  <Link href="#" className={`${homeStyles.pdTextSnone} card-title h2`}>sample05</Link>
                  <p className='card-text'>概要説明(準備中)</p>
                </div>
                <div className={`${styles.cardFoot}`}>Update 20**/**/**</div>
              </div>
              <div className='card m-1'>
                <Link href="#">
                  <Image src="/img/preparatImg.png" width="150" height="150" className='card-img-top'/>
                </Link>
                <div className='card-body'>
                  <Link href="#" className={`${homeStyles.pdTextSnone} card-title h2`}>sample06</Link>
                  <p className='card-text'>概要説明(準備中)</p>
                </div>
                <div className={`${styles.cardFoot}`}>Update 20**/**/**</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

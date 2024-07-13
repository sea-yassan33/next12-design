import React,{useState} from 'react';
import homeStyles from '../styles/Home.module.css'
import Image from "next/image";
import Link from 'next/link';


const styles ={
  navStyle : "navbar navbar-expand-lg navbar-dark pd-back-color", 
  cardFoot: "card-footer text-end small text-muted",
  btnPart01: "btn rounded-pill px-3",
  btnpart02: "btn dropdown-toggle dropdown-toggle-split show",
};

export default function Home() {
  // ドロップダウンメニューの作成
  const [dropOpen, setDropOpen] = useState(false);
  const toggleDropdown = () => {
    setDropOpen(!dropOpen)
  };

  return (
    <div>
      <nav className={`${styles.navStyle} ${homeStyles.pdBgcolor}`}>
        <div className={'container-fluid'}>
          <a className={`navbar-brand`} href="#">
            <Image src="https://i.gyazo.com/e4e71335ce331b27a3e3151ff99dccfe.png" width="60" height="60" className="d-inline-block align-top mr-1" alt="Logo"/>
            デザイン・テンプレート集
          </a>
        </div>
      </nav>
      <main className={'container-fluid'}>
        <div className={`row`}>
          {/* 右側 */}
          <div className={`col-3 ${homeStyles.pdSideMenu}`}>
            <div className='mt-3 text-center'>
              <p className={`h2 ${homeStyles.pdFontComic}`}>Link Collection</p>
            </div>
            <hr/>
            <div className='mt-3'>
              <p className={`h3 ${homeStyles.pdFontComic}`}>Boot Strap</p>
              <div className='ms-3 mb-2'>
                <Link href="https://getbootstrap.jp/docs/5.3/examples/" target='_blank'>
                  <button className={`${styles.btnPart01} btn-warning`}>サンプル</button>
                </Link>
              </div>
              <div className='ms-3 mb-2'>
                <Link href="https://bootstrap-guide.com/sample/cheatsheet" target='_blank'>
                  <button className={`${styles.btnPart01} btn-warning`}>チートシート</button>
                </Link>
              </div>
              <div className='ms-3 mb-2'>
                <Link href="https://bootstrap-guide.com/example" target='_blank'>
                  <button className={`${styles.btnPart01} btn-warning`}>設置ガイド</button>
                </Link>
              </div>
              <div className='ms-3 mb-2'>
                <Link href="https://bootstraptaste.com/" target='_blank'>
                  <button className={`${styles.btnPart01} btn-warning`}>DS:bootstraptaste</button>
                </Link>
              </div>
              <div className='btn-group mt-3'>
                <button type='button' className='btn btn-secondary'>クラス名</button>
                <button type='button' className={`${styles.btnpart02} btn-secondary`} onClick={toggleDropdown} aria-expanded={dropOpen}>
                  <span className='visually-hidden'>ドロップダウンの切替</span>
                </button>
                <ul className={`dropdown-menu ${dropOpen ? 'show' : ''} ${homeStyles.pdBtnPullDown}`} data-popper-placement="bottom-start">
                  <li><Link href="https://qiita.com/Rock22/items/e4e89f15c29e1415977d" className='dropdown-item' target='_blank'>text-align</Link></li>
                  <li><Link href="#" className='dropdown-item'>メニュー１</Link></li>
                </ul>
              </div>
              <hr/>
            </div>
            
          </div>
          {/* 左側 */}
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

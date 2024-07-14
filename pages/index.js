import React,{useState} from 'react';
import homeStyles from '../styles/Home.module.css'
import Image from "next/image";
import Link from 'next/link';

//テンプレートデータを用意
export async function getStaticProps(){
  // 非同期でテンプレート情報を取得
  const res = await fetch('http://localhost:3000/api/templates');
  const {tempData, bootStrapClassDate} = await res.json();
  return{
    props: {
      tempData,
      bootStrapClassDate
    }
  };
}

const styles ={
  navStyle : "navbar navbar-expand-lg navbar-dark pd-back-color", 
  cardFoot: "card-footer text-end small text-muted",
  btnPart01: "btn rounded-pill px-3",
  btnpart02: "btn dropdown-toggle dropdown-toggle-split show",
};

export default function Home({tempData, bootStrapClassDate}) {
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
                  {bootStrapClassDate.map((classItem, index) =>(
                    <li key={index}>
                      <Link href={classItem.href} className='dropdown-item' target='_blank'>{classItem.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <hr/>
            </div>
          </div>
          {/* 左側 */}
          <div className={`col-9 ${homeStyles.pdMainMenu}`}>
            <h1>デザイン・テンプレート集</h1>
            <div className='row mb-3'>
              {tempData.map((temp,index)=>(
                <div className='card m-1 col-sm-4' key={index}>
                  <Link href={temp.href} target='_blank'>
                    <Image src={temp.src} width="150" height="150" className='card-img-top' alt='img'/>
                  </Link>
                  <div className='card-body'>
                    <Link href={temp.href} className={`${homeStyles.pdTextSnone} card-title h2`} target='_blank'>
                      {temp.title}
                    </Link>
                    <p className='card-text'>{temp.description}</p>
                  </div>
                  <div className={`${styles.cardFoot}`}>Update {temp.update}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

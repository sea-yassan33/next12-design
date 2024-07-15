import homeStyles from '../../styles/Home.module.css'
import Image from "next/image";
import Link from 'next/link';

const styles ={
    // ヘッダーのスタイル
    navStyle : "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start", 
    navLink : "d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none",
    navUl: "nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0",
    navLi01: "nav-link px-2",
    navLi02: "nav-link px-2 text-white",
    // メインのスタイル
    sectionMainCol: "row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5",
    sectionLeftCol: "col d-flex flex-column align-items-start gap-2",
    sectionRightCol: "row row-cols-1 row-cols-sm-2 g-4",
    sectionRightItem01: "col flex-column gap-2 ",
    sectionRightItem02: "btn btn-info fs-4 rounded-3 mb-2",
    sectionRightItem03: "fw-semibold mb-0 text-body-emphasis mb3",
    btn01: "btn btn-primary btn-lg",
    //フッダーのスタイル
    footAbout: "col-lg-4 col-md-6 footer-about",
    footLink: "col-lg-2 col-md-3 footer-links",
    footIcon: "bi bi-chevron-right",
};

const iconPath ={
    // https://icons.getbootstrap.jp/icons/collection-play-fill/
    icon01 : "M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z",
    // https://icons.getbootstrap.jp/icons/speedometer/
    icon0201: "M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z",
    icon0202: "M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z",
    // https://icons.getbootstrap.jp/icons/house-gear-fill/
    icon0301: "M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5Z",
    icon0302: "M11.07 9.047a1.5 1.5 0 0 0-1.742.26l-.02.021a1.5 1.5 0 0 0-.261 1.742 1.5 1.5 0 0 0 0 2.86 1.504 1.504 0 0 0-.12 1.07H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6 4.724 4.724a1.5 1.5 0 0 0-1.654 1.03Z",
    icon0303: "m13.158 9.608-.043-.148c-.181-.613-1.049-.613-1.23 0l-.043.148a.64.64 0 0 1-.921.382l-.136-.074c-.561-.306-1.175.308-.87.869l.075.136a.64.64 0 0 1-.382.92l-.148.045c-.613.18-.613 1.048 0 1.229l.148.043a.64.64 0 0 1 .382.921l-.074.136c-.306.561.308 1.175.869.87l.136-.075a.64.64 0 0 1 .92.382l.045.149c.18.612 1.048.612 1.229 0l.043-.15a.64.64 0 0 1 .921-.38l.136.074c.561.305 1.175-.309.87-.87l-.075-.136a.64.64 0 0 1 .382-.92l.149-.044c.612-.181.612-1.049 0-1.23l-.15-.043a.64.64 0 0 1-.38-.921l.074-.136c.305-.561-.309-1.175-.87-.87l-.136.075a.64.64 0 0 1-.92-.382ZM12.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
    // https://icons.getbootstrap.jp/icons/table/
    icon04: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z",
    // https://icons.getbootstrap.jp/icons/chevron-right/
    icon05: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",
    // https://icons.getbootstrap.jp/icons/twitter/
    iconTwitter:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
    // https://icons.getbootstrap.jp/icons/facebook/
    iconFacebook:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
    // https://icons.getbootstrap.jp/icons/instagram/
    iconInstagram:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
  }

const Header = () =>{
    return(
        <header className={`p-3 text-bg-dark`}>
            <div className={`container`}>
                <div className={`${styles.navStyle}`}>
                    <Link href="/" className={`${styles.navLink}`}>
                        <button type="button" className="btn btn-outline-primary">Home</button>
                    </Link>
                    <ul className={`${styles.navUl}`}>
                        <li><Link href="#" className={`${styles.navLi01} text-secondary`}>Sampe02</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

const Section1 =()=>{
  return(
    <section className={`${homeStyles.pdTopMai02} `}>
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                </div>
                <div className='col-9'>
                    <h1 className={`${homeStyles.pdFontRoboto}`}>TITLE_NAME</h1>
                    <p className='opacity-50'>
                    Next.jsを使用したモダンなWeb開発の入門ページです。<br/>迅速で効率的な開発をサポートするためのサポートします。
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

const Section2=()=>{
  return(
    <section className='container px-4 py-5'>
      <h2 className='pb-2 border-bottom'>機能の紹介</h2>
      <div className={`${styles.sectionMainCol}`}>
          {/* Left */}
          <div className={`${styles.sectionLeftCol}`}>
              <h2 className='fw-bold text-body-emphasis'>
                  素晴らしい機能を説明する左揃えのタイトル
              </h2>
              <p className='text-body-secondary'>
                  見出しの下に、見出しを説明する文章の段落を置きます。これに別の文を追加することも可能です。
                  <br/>
                  (サンプル説明)Next.js 12は、Reactベースのフレームワークで、Web開発者がパフォーマンスの高いWebアプリケーションを構築するための多くの新機能と改善を提供します。新機能には、RustベースのSWCコンパイラによる高速なビルド、ミドルウェア機能、Edge Functionsのサポートなどが含まれます。また、Webpack 5のデフォルトサポートや、React 18との互換性も強化されています。これにより、開発者はより効率的にスケーラブルでモダンなアプリケーションを構築できます。
              </p>
              <Link href="#" className={`${styles.btn01}`}>詳しくは．．．</Link>
          </div>
          {/* Right */}
          <div className='col'>
              <div className={`${styles.sectionRightCol}`}>
                  <div className={`${styles.sectionRightItem01}`}>
                      <div className={`${styles.sectionRightItem02}`}>
                          <svg className='bi' width="30" height="30" viewBox="0 0 16 16">
                              <path d={`${iconPath.icon01}`}/>
                          </svg>
                      </div>
                      <h4 className={`${styles.sectionRightItem03}`}>機能タイトル</h4>
                      <p className='text-body-secondary'>見出しを説明する見出しの下のテキストの段落。</p>
                  </div>
                  <div className={`${styles.sectionRightItem01}`}>
                      <div className={`${styles.sectionRightItem02}`}>
                          <svg className='bi bi-speedometer' width="30" height="30" viewBox="0 0 16 16">
                              <path d={`${iconPath.icon0201}`}/>
                              <path d={`${iconPath.icon0202}`}/>
                          </svg>
                      </div>
                      <h4 className={`${styles.sectionRightItem03}`}>機能タイトル</h4>
                      <p className='text-body-secondary'>見出しを説明する見出しの下のテキストの段落。</p>
                  </div>
                  <div className={`${styles.sectionRightItem01}`}>
                      <div className={`${styles.sectionRightItem02}`}>
                          <svg className='bi' width="30" height="30" viewBox="0 0 16 16">
                              <path d={`${iconPath.icon0301}`}/>
                              <path d={`${iconPath.icon0302}`}/>
                              <path d={`${iconPath.icon0303}`}/>
                          </svg>
                      </div>
                      <h4 className={`${styles.sectionRightItem03}`}>機能タイトル</h4>
                      <p className='text-body-secondary'>見出しを説明する見出しの下のテキストの段落。</p>
                  </div>
                  <div className={`${styles.sectionRightItem01}`}>
                      <div className={`${styles.sectionRightItem02}`}>
                          <svg className='bi bi-collection-play-fill' width="30" height="30" viewBox="0 0 16 16">
                              <path d={`${iconPath.icon04}`}/>
                          </svg>
                      </div>
                      <h4 className={`${styles.sectionRightItem03}`}>機能タイトル</h4>
                      <p className='text-body-secondary'>見出しを説明する見出しの下のテキストの段落。</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}

const Footer =()=>{
  return(
    <footer className='footer position-relative bg-secondary bg-opacity-10'>
      <div className='container footer-top'>
        <div className='row gy-4'>
          <div className={`${styles.footAbout}`}>
            <Link href="#" className='d-flex align-items-center'>
              <span className='sitename'>Ninestars</span>
            </Link>
            <div className='footer-contact pt-3'>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className='mt-3'><strong>Phone:</strong><span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
          </div>
          <div className={`${styles.footLink}`}>
            <h4>Useful Links</h4>
            <ul>
              <li className='mb-1 d-block'><svg className='bi me-1' width="16" height="16" viewBox="0 0 16 16"><path d={`${iconPath.icon05}`}/></svg><Link href="#">Home</Link></li>
              <li className='mb-1 d-block'><svg className='bi me-1' width="16" height="16" viewBox="0 0 16 16"><path d={`${iconPath.icon05}`}/></svg><Link href="#">About</Link></li>
              <li className='mb-1 d-block'><svg className='bi me-1' width="16" height="16" viewBox="0 0 16 16"><path d={`${iconPath.icon05}`}/></svg><Link href="#">Services</Link></li>
            </ul>
          </div>
          <div className={`${styles.footLink}`}>
            <h4>Our Services</h4>
            <ul>
              <li className='mb-1 d-block'><svg className='bi me-1' width="16" height="16" viewBox="0 0 16 16"><path d={`${iconPath.icon05}`}/></svg><Link href="#">Desingn</Link></li>
              <li className='mb-1 d-block'><svg className='bi me-1' width="16" height="16" viewBox="0 0 16 16"><path d={`${iconPath.icon05}`}/></svg><Link href="#">Development</Link></li>
              <li className='mb-1 d-block'><svg className='bi me-1' width="16" height="16" viewBox="0 0 16 16"><path d={`${iconPath.icon05}`}/></svg><Link href="#">Management</Link></li>
              <li className='mb-1 d-block'><svg className='bi me-1' width="16" height="16" viewBox="0 0 16 16"><path d={`${iconPath.icon05}`}/></svg><Link href="#">Marketing</Link></li>
            </ul>
          </div>
          <div className='col-lg-4 col-md-12'>
            <h4>Follow Us</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div class="social-links d-flex">
              <div className='d-flex gap-2 me-2'>
                <Link href="#">
                  <button className='btn btn-info'>
                    <svg className='bi me-1' width="16" height="16" viewBox="0 0 16 16"><path d={`${iconPath.iconTwitter}`}/></svg>
                  </button>
                </Link>
              </div>
              <div className='d-flex gap-2 me-2'>
                <Link href="#">
                  <button className='btn btn-info'>
                    <svg className='bi me-1' width="16" height="16" viewBox="0 0 16 16"><path d={`${iconPath.iconFacebook}`}/></svg>
                  </button>
                </Link>
              </div>
              <div className='d-flex gap-2 me-2'>
                <Link href="#">
                  <button className='btn btn-info'>
                    <svg className='bi me-1' width="16" height="16" viewBox="0 0 16 16"><path d={`${iconPath.iconInstagram}`}/></svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const sample02Index = () => {
    return (
        <div>
            <Header/>
            <main>
                <Section1 />
                <Section2 />
            </main>
            <Footer/>
        </div>
    );
}

export default sample02Index;
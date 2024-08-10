import Link from "next/link";
import styles from './index.module.css'

const classStyles ={
  // Header
  headers: "navbar sticky-top bg-secondary flex-md-nowrap p-0 shadow",
  title:"navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white",
  // Side
  sides: "sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary",
  // Main
  mains: "col-md-9 ms-sm-auto col-lg-10 px-md-4",
  mainTitle: "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",
  colA01: "col-md-8 col-lg-9",
  colA02: "col-md-4 col-lg-3"
};

function Header(){
  return(
  <header className={`${classStyles.headers}`}>
    <Link className={`${classStyles.title}`} href="/">Home</Link>
  </header>
  )
}

function Side(){
  return(
    <div className={`${classStyles.sides}`}>
      <div className="h3">Said Manu</div>
    </div>
  )
}

function Main(){
  return(
    <main className={`${classStyles.mains} ${styles.pdMainMenu}`}>
      <div className={`${classStyles.mainTitle}`}>Main Title</div>
      <div className="row">
        <div className={`${classStyles.colA01}`}>
          <h4 className="mb-3">入力フォーム</h4>
          <form>
            <div className="row g-3">
              {/* インプット(text) */}
              <div className="col-12">
                <label className="form-label">入力フォーム１<span className="text-body-secondary">(追記)</span></label>
                <input type="text" className="form-control" id="input01" placeholder="inputForm01"/>
              </div>
              <div className="col-12">
                <label className="form-label">入力フォーム2<span className="text-body-secondary">(追記)</span></label>
                <input type="text" className="form-control" id="input02" placeholder="inputForm02"/>
              </div>
              <hr className="my-4"/>
              {/* チェックボックス */}
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="check01"/>
                <label className="form-check-label">チェックボックス01</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="check02"/>
                <label className="form-check-label">チェックボックス02</label>
              </div>
              <hr className="my-4"/>
              {/* ラジオボックス */}
              <h4 className="my-3">ラジオボタン</h4>
              <div className="form-check">
                <input id="radio01" type="radio" className="form-check-input"/>
                <label className="form-check-label">ラジオボタン01</label>
              </div>
              <div className="form-check">
                <input id="radio02" type="radio" className="form-check-input"/>
                <label className="form-check-label">ラジオボタン02</label>
              </div>
              <hr className="my-4"/>
              {/* 送信 */}
              <button className="btn btn-primary w-50">送信</button>
            </div>
          </form>
        </div>
        <div className={`${classStyles.colA02}`}>
        </div>
      </div>
      <hr className="my-4"/>
      {/* テーブル */}
      <div className="">テーブル</div>
    </main>
  )
}

function sample03Index() {
  return (
    <>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <Side/>
          <Main/>
        </div>
      </div>
    </>
  );
}

export default sample03Index;
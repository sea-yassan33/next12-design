import homeStyles from '../../styles/Home.module.css'
import Image from "next/image";
import Link from 'next/link';

const styles ={
    navStyle : "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start", 
    navLink : "d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none",
    navUl: "nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0",
    navLi01: "nav-link px-2",
    navLi02: "nav-link px-2 text-white",
};

const sample01Index = () => {
    return (
        <div>
            <header className={`p-3 text-bg-dark`}>
                <div className={`container`}>
                    <div className={`${styles.navStyle}`}>
                        <Link href="/" className={`${styles.navLink}`}>
                            <button type="button" className="btn btn-outline-primary">Home</button>
                        </Link>
                        <ul className={`${styles.navUl}`}>
                            <li><Link href="/" className={`${styles.navLi01} text-secondary`}>ホーム</Link></li>
                            <li><Link href="#" className={`${styles.navLi02}`}>リンク</Link></li>
                            <li><Link href="#" className={`${styles.navLi02}`}>概要</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <section className={`${homeStyles.pdTopMai01}`}>
                <div className='container'>
                    <div className={`${homeStyles.pdTopMainTitle}`}>Welcome to Page</div>
                    <div className={`${homeStyles.pdTopMainTitle}`}>~ Sab Title ~</div>
                </div>
            </section>
        </div>
    );
}

export default sample01Index;
import React from "react";
import '../../styles/top-page/Footer.css'
import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <>
     <section className="footer-area">
      <div className="footer-container">
          <div className="footer-left">
            <h2>AIZU</h2>
            <span>東北の温泉施設</span>
            <address>〒390-1520 福島県会津若松市1-1-1</address>
          </div>
          <Link className="footer-centur-reserved"><span></span>予約する</Link>
          <div className="footer-right">
                <ul>
                    <li><a href="#"><span>お問い合わせ</span></a></li>
                    <li><a href="#"><span>アクセス</span></a></li>
                    <li><a href="#"><span>プライバシーポリシー</span></a></li>
                </ul>
         </div>
      </div>
    </section>
        </>
    )
}
export default Footer;
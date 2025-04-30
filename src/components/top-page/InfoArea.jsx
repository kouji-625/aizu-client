import React from "react";
import '../../styles/top-page/InfoArea.css'


const InfoArea = () => {
    return(
        <>
        <section className="info-area">
            <div className="info-container">
                <h2 className="info-title">INFORMATION</h2>
                    <dl>
                        <dt>2025.03.01</dt>
                    <dd><a href="#">3月休館日のお知らせ</a></dd>
                    </dl>
                    <dl>
                        <dt>2025.03.01</dt>
                    <dd><a href="#">空調設備点検のお知らせ</a></dd>
                    </dl>
                    <dl>
                        <dt>2025.03.01</dt>
                    <dd><a href="#">エレベーター工事のお知らせ</a></dd>
                   </dl>
                    <dl>
                        <dt>2025.03.01</dt>
                    <dd><a href="#">館内清掃のお知らせ</a></dd>
                    </dl>
                    <a href="#" className="read-more-info">READ MORE<span></span></a>
            </div>
        </section>
        </>
    )
}
export default InfoArea;
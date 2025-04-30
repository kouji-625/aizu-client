import React from "react";
import '../../styles/top-page/OnsenTopPage.css'
import { Link } from "react-router-dom";


const OnsenTopPage = () => {
    return(
        <>
        <section className="onsen-area">
            <div className="onsen-container">
                <div className="onsen-image"></div>
              <div className="onsen-txt-container">  
                <div className="onsen-txt-box">
                    <h2 className="onsen-top-title">温泉</h2>
                    <span>
様々な泉質がるので、いろいろな
健康効果を楽しむことができます。
露天風呂、檜風呂があります。
                    </span>
                    <Link to="/onsen-page">
                    <button className="read-more-onsen">READ MORE<span></span></button>
                    </Link>
                </div>
            </div>            
        </div>
        </section>
        </>
    )
}
export default OnsenTopPage;
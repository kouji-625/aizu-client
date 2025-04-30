import React from "react";
import '../../styles/top-page/Foods.css'

const Foods = () => {
    return(
        <>
        <section className="foods-area">
            <div className="foods-container">
                <div className="foods-image"></div>
              <div className="foods-txt-container">  
                <div className="foods-txt-box">
                    <h2 className="foods-title">食事</h2>
                    <span>
地産地消をめざして和食を中心とした
料理をご提供しております。
                    </span><a href="#" className="read-more-foods">READ MORE<span></span></a>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default Foods;
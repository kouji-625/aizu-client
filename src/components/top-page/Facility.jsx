import React from "react";
import '../../styles/top-page/Facility.css'

const Facility = () => {
    return(
        <>
        <section className="facility-area">
            <div className="facility-container">
                <div className="facility-image"></div>
                  <div className="facility-txt-container">
                    <div className="facility-txt-box">
                      <h2 className="facility-title">施設</h2>
                        <span>
家具にもこだわった休憩スペースもあり
ご家族でもくつろげる空間がございます。
                        </span>
                         <a href="#" className="read-more-facility">READ MORE<span></span></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Facility;
import React from "react";
import '../../styles/top-page/Room.css'

const Room = () => {
    return(
        <>
        <section className="room-area">
            <div className="room-container">
                <div className="room-image"></div>
              <div className="room-txt-container">  
                <div className="room-txt-box">
                    <h2 className="room-title">部屋</h2>
                    <span>
落ち着いた雰囲気でくつろげるようなお部屋に
なっております。窓からの景色も楽しめます。
                    </span><a href="#" className="read-more-room">READ MORE<span></span></a>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default Room;
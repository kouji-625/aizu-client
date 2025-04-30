import React from "react";
import '../../styles/onsen/OnsenHeader.css';

const OnsenHeader = () => {
    return (
        <>
         <div className="onsen-header">
            <div className="onsen-visual"></div>
         </div>
         <div className="onsen-title"><span>温泉のご案内</span></div>
             <div className="onsen-concept">
                <h2>四季折々の風景をたのしみながら<br /><span>極上の癒しをお楽しみください。</span></h2>
             </div>
        </>
    )
}
export default OnsenHeader;
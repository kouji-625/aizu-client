import React from "react";
import '../../styles/top-page/ReservedButton.css'
import { Link } from "react-router-dom";

const ReservedButton = () => {
    return(
        <>
        <Link to="/reserved"><span className="js-reserved">予約する</span></Link>
        </>   
     )
    
}
export default ReservedButton;
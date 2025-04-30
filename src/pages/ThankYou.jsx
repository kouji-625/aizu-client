import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import '../styles/cutomer-info/ThankYou.css';

const ThankYou = () => {
    const { state } = useLocation();
    const reservation = state?.reservation;

    return(
        <div className="thankyou-container">
            <div className="thankyou-item">
              <h1>予約完了</h1>
                <h2>
                    ご利用ありがとうございます。E-mailにて予約内容をお送りいたしますので、
                    ご確認のほどよろしくお願いいたします。
                </h2>
                <div className="reservation-box">
                <p>・予約番号: {reservation?.id || '不明'}</p>
      <p>・部屋タイプ: {reservation?.roomType || '不明'}</p>
      <p>・お名前: {reservation?.name || '不明'}様</p>
                </div>
                  <Link to="/">
                  <div className="thankyou-btn">
                    <button className="thankyou-button">トップページに戻る</button>
                    </div>
                  </Link>
            </div>
        </div>
    );
};

export default ThankYou;
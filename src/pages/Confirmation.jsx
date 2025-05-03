import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ReservationSummary from '../components/customerinfo/ReservationSummary.jsx';
import Confirm from '../components/customerinfo/Confirm.jsx';
import '../styles/cutomer-info/Confirmation.css'; 

const Confirmation = () => {
  const location = useLocation();
  const [serverError, setServerError] = useState(null);
  const reservation = location.state?.reservation;

  // デバッグログ
  console.log('Confirmation received reservation:', JSON.stringify(reservation, null, 2));
  console.log('Reservation roomId:', reservation?.roomId);
  console.log('Reservation roomDetails:', reservation?.roomDetails);

  // reservation または roomId がない場合
  if (!reservation || !reservation.roomId) {
    console.error('Missing reservation or roomId:', reservation);
    return (
      <div>
        <p>エラー: 予約情報がありません。部屋選択ページに戻ってください。</p>
        <Link to="/reserved">
          <span>戻る</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="confirmation-info">
      <div className="confirmation-form-title">
        <h2>予約内容の確認</h2>
      </div>
      <div className="confirmation-container">
        <div className="confirmation-form-area">
          <Confirm reservation={reservation} />
          {serverError && <p className="error-message">{serverError}</p>}
        </div>
        <div className="confirmation-summary-area">
          <ReservationSummary reservation={reservation} />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
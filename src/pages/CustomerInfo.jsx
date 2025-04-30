import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ReservationSummary from '../components/customerinfo/ReservationSummary.jsx';
import CustomerForm from '../components/customerinfo/CustomerForm.jsx';
import '../styles/cutomer-info/CustomerInfo.css';

const CustomerInfo = () => {
  const location = useLocation();
  const [serverError, setServerError] = useState(null);
  const formData = location.state?.formData;

  // formData または roomId がない場合
  if (!formData || !formData.roomId) {
    return (
      <div>
        <p>エラー: 部屋が選択されていません。部屋選択ページに戻ってください。</p>
        <Link to="/reserved">
          <span>戻る</span>
        </Link>
      </div>
    );
  }

  // reservationData を formData から直接構築
  const reservationData = {
    ...formData,
    roomDetails: formData.roomDetails || {
      price: formData.totalPrice / (formData.nights * formData.guests),
      image: '/images/reserved1.jpg', // フォールバック
      name: formData.roomType,
    },
  };

  return (
    <div className="customer-info">
      <div className="customer-container">
        <div className="customer-form-area">
          <div className="customer-form-title">
            <h2>お客様情報</h2>
          </div>
          <CustomerForm formData={formData} setServerError={setServerError} />
          {serverError && <p className="error-message">{serverError}</p>}
        </div>
        <div className="summary-area">
          <ReservationSummary reservation={reservationData} />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
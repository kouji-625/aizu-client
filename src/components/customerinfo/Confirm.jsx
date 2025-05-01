import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/cutomer-info/Confirm.css';

const Confirm = ({ reservation }) => {
  const navigate = useNavigate();

  const handleConfirm = async () => {
    try {
      console.log('Sending reservation to backend:', reservation);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservation),
      });
      console.log('Response status:', response.status);
      if (!response.ok) {
        const text = await response.text(); // 生のレスポンスを確認
        console.error('Response text:', text);
        let errorData;
        try {
          errorData = JSON.parse(text);
        } catch {
          throw new Error(`予約の確定に失敗しました: ${response.status} ${response.statusText}`);
        }
        console.error('Error response:', errorData);
        throw new Error(errorData.errors?.[0]?.msg || '予約の確定に失敗しました');
      }
      const data = await response.json();
      console.log('Success response:', data);
      navigate('/thank-you', { state: { reservation: data } });
    } catch (error) {
      console.error('Error:', error);
      alert(`エラー: ${error.message}`);
    }
  };

  return (
    <div className="confirm-area">
      <div className="confirm-title">
        <h2>お客様情報</h2>
      </div>
      <div className="confirm-container">
        <p className="confirm-item">
          <span>名前:</span>{reservation.name || '未入力'}
        </p>
        <p className="confirm-item">
          <span>メール:</span>{reservation.email || '未入力'}
        </p>
        <p className="confirm-item">
          <span>郵便番号:</span>{reservation.postalCode || '未入力'}
        </p>
        <p className="confirm-item">
          <span>住所:</span>{reservation.address || '未入力'}
        </p>
        <p className="confirm-item">
          <span>電話番号:</span>{reservation.phone || '未入力'}
        </p>
        <div className="confirm-button-container">
          <Link to="/customer-info" className="return">
            <span>戻る</span>
          </Link>
          <div className="confirm-btn">
            <button
              type="button"
              className="confirm-button"
              onClick={handleConfirm}
            >
              予約を確定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
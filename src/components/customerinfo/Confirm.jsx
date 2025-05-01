import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // UUID ライブラリをインポート
import "../../styles/cutomer-info/Confirm.css";

const Confirm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const reservation = state?.reservation || {};
  const [isSubmitting, setIsSubmitting] = useState(false); // 送信状態を追加
  const [serverError, setServerError] = useState(null);

  const handleConfirm = async () => {
    if (isSubmitting) return; // 送信中は無効
    setIsSubmitting(true);
    setServerError(null);

    // id フィールドを除外し、requestId を追加
    const { id, ...reservationData } = reservation;
    const finalData = {
      ...reservationData,
      requestId: uuidv4(), // 一意の requestId
    };

    console.log("Confirm 送信データ:", finalData);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
        signal: AbortSignal.timeout(5000), // 5秒でタイムアウト
      });
      const data = await response.json();
      console.log("Response:", data);

      if (response.status === 201 || response.status === 200) {
        navigate("/thank-you", { state: { reservation: data } });
      } else {
        throw new Error(data.errors ? data.errors[0].msg : data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setServerError(`エラー: ${error.message}`);
    } finally {
      setIsSubmitting(false); // 送信終了
    }
  };

  return (
    <div className="confirm-area">
      <div className="confirm-title">
        <h2>お客様情報</h2>
      </div>
      <div className="confirm-container">
        <p className="confirm-item">
          <span>名前:</span>
          {reservation.name || "未入力"}
        </p>
        <p className="confirm-item">
          <span>メール:</span>
          {reservation.email || "未入力"}
        </p>
        <p className="confirm-item">
          <span>郵便番号:</span>
          {reservation.postalCode || "未入力"}
        </p>
        <p className="confirm-item">
          <span>住所:</span>
          {reservation.address || "未入力"}
        </p>
        <p className="confirm-item">
          <span>電話番号:</span>
          {reservation.phone || "未入力"}
        </p>
        <p className="confirm-item">
          <span>部屋タイプ:</span>
          {reservation.roomType || "未入力"}
        </p>
        <p className="confirm-item">
          <span>チェックイン:</span>
          {reservation.checkIn ? new Date(reservation.checkIn).toLocaleDateString("ja-JP") : "未入力"}
        </p>
        <p className="confirm-item">
          <span>チェックアウト:</span>
          {reservation.checkOut ? new Date(reservation.checkOut).toLocaleDateString("ja-JP") : "未入力"}
        </p>
        <p className="confirm-item">
          <span>宿泊数:</span>
          {reservation.nights || "未入力"}泊
        </p>
        <p className="confirm-item">
          <span>宿泊人数:</span>
          {reservation.guests || "未入力"}名
        </p>
        <p className="confirm-item">
          <span>合計金額:</span>
          ¥{reservation.totalPrice ? reservation.totalPrice.toLocaleString() : "未入力"}
        </p>
        {serverError && <p className="error-message">{serverError}</p>}
        <div className="confirm-button-container">
          <Link to="/customer-info" className="return">
            <span>戻る</span>
          </Link>
          <div className="confirm-btn">
            <button
              type="button"
              className="confirm-button"
              onClick={handleConfirm}
              disabled={isSubmitting}
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
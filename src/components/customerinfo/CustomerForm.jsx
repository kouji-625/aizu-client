import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/cutomer-info/CustomerForm.css";

// Yupのバリデーションスキーマ（変更なし）
const schema = Yup.object().shape({
  name: Yup.string().required("名前は必須です"),
  email: Yup.string()
    .email("有効なメールアドレスを入力してください")
    .required("メールは必須です"),
  postalCode: Yup.string()
    .required("郵便番号は必須です")
    .matches(/^\d{3}-\d{4}$/, "郵便番号は「123-4567」の形式で入力してください"),
  address: Yup.string()
    .required("住所は必須です")
    .min(5, "住所は5文字以上で入力してください")
    .max(100, "住所は100文字以内にしてください")
    .matches(/^[^\s].*$/, "住所の先頭に空白は使用できません"),
  phone: Yup.string()
    .required("電話番号は必須です")
    .matches(/^\d{10,11}$/, "電話番号は10〜11桁の数字で入力してください"),
});

const CustomerForm = ({ formData, onSubmit }) => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (data) => {
    // formData（Header.jsx と RoomList.jsx からのデータ）を結合
    const reservationData = {
      ...data, // CustomerForm のデータ（name, email, postalCode, address, phone）
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      nights: formData.nights,
      guests: formData.guests,
      roomType: formData.roomType,
      roomId: formData.roomId,
      totalPrice: formData.totalPrice,
    };

    console.log("送信データ:", reservationData); // デバッグ用
    console.log('roomId の値:', formData.roomId); // roomId を個別にログ出力

    // バックエンドへの POST リクエストを削除し、確認画面に遷移
    try {
      navigate("/confirmation", { state: { reservation: reservationData } });
    } catch (err) {
      setServerError("エラーが発生しました");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="customer-area">
        <div className="label-item">
          <label>名前:</label>
          <div className="input-item">
            <input type="text" placeholder="山田太郎" {...register("name")} />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="label-item">
          <label>メール:</label>
          <div className="input-item">
            <input
              type="email"
              placeholder="example@domain.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="label-item">
          <label>郵便番号:</label>
          <div className="input-item">
            <input
              type="text"
              {...register("postalCode")}
              placeholder="123-4567"
            />
            {errors.postalCode && (
              <p className="error-message">{errors.postalCode.message}</p>
            )}
          </div>
        </div>
        <div className="label-item">
          <label>住所:</label>
          <div className="input-item">
            <input
              type="text"
              placeholder="東京都"
              {...register("address")}
            />
            {errors.address && (
              <p className="error-message">{errors.address.message}</p>
            )}
          </div>
        </div>
        <div className="label-item">
          <label>電話番号:</label>
          <div className="input-item">
            <input
              type="tel"
              placeholder="111-1111-1111"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
          </div>
        </div>
        {serverError && <p className="error-message">{serverError}</p>}
        <div className="button-container">
          <Link to="/reserved">
            <span className="customer-return">戻る</span>
          </Link>
          <div className="customer-btn">
            <button type="submit" className="customer-button">
              予約する
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CustomerForm;
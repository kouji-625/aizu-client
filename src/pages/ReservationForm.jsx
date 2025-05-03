import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import reservationSchema from '../validation/reservationSchemas.js';
import Header from '../components/reserved-form/Header.jsx';
import RoomList from '../components/reserved-form/RoomList.jsx';
import ReservedFooter from '../components/reserved-form/ReservedFooter.jsx';
import './Reservation.css';

const ReservationForm = () => {
  // 現在の日付と翌日の日付を計算
  const today = new Date();
  const todayFormatted = today.toISOString().split('T')[0]; // 例: 2025-05-03
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0]; // 例: 2025-05-04

  const [formData, setFormData] = useState({
    checkIn: todayFormatted,
    checkOut: tomorrowFormatted,
    nights: 1,
    guests: 1,
    roomType: '',
    roomId: '',
    totalPrice: 0,
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reservationSchema),
    defaultValues: {
      checkIn: todayFormatted,
      checkOut: tomorrowFormatted,
      nights: 1,
      guests: 1,
      roomType: '',
      roomId: '',
      totalPrice: 0,
    },
  });

  // 特定のフォームフィールドを監視
  const checkIn = watch('checkIn');
  const checkOut = watch('checkOut');
  const nights = watch('nights');
  const guests = watch('guests');
  const roomType = watch('roomType');
  const roomId = watch('roomId');
  const totalPrice = watch('totalPrice');

  // フォームの値が変更されたら formData を更新
  useEffect(() => {
    setFormData({
      checkIn,
      checkOut,
      nights,
      guests,
      roomType,
      roomId,
      totalPrice,
    });
    // デバッグログ
    console.log('Updated formData:', {
      checkIn,
      checkOut,
      nights,
      guests,
      roomType,
      roomId,
      totalPrice,
    });
  }, [checkIn, checkOut, nights, guests, roomType, roomId, totalPrice]);

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="reservation-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header
          register={register}
          errors={errors}
          formData={formData}
          setValue={setValue}
          watch={watch}
        />
        <RoomList formData={formData} setValue={setValue} />
      </form>
      <ReservedFooter />
    </div>
  );
};

export default ReservationForm;
import React, { useEffect, useRef } from 'react';
import '../../styles/reserved-form/Header.css';

const Header = ({ register, errors, formData, setValue, watch }) => {
  // watch を使って checkIn, checkOut, nights を監視
  const checkIn = watch('checkIn');
  const checkOut = watch('checkOut');
  const nights = watch('nights');

  // 手動変更かどうかを管理するフラグ
  const isManualNightsChange = useRef(false);

  // チェックアウトから泊数を計算（チェックインまたはチェックアウトが変更されたとき）
  useEffect(() => {
    if (checkIn && checkOut && !isManualNightsChange.current) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const timeDifference = checkOutDate - checkInDate;
      const calculatedNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      if (calculatedNights > 0) {
        setValue('nights', calculatedNights);
      } else {
        setValue('nights', 1);
      }
    }
    // 計算が終わったらフラグをリセット
    isManualNightsChange.current = false;
  }, [checkIn, checkOut, setValue]);

  // 泊数からチェックアウトを計算（泊数が変更されたとき）
  useEffect(() => {
    if (checkIn && nights && isManualNightsChange.current) {
      const checkInDate = new Date(checkIn);
      // checkIn に nights を足して新しい checkOut を計算
      const newCheckOutDate = new Date(checkInDate);
      newCheckOutDate.setDate(checkInDate.getDate() + Number(nights));

      // YYYY-MM-DD 形式に変換
      const formattedCheckOut = newCheckOutDate.toISOString().split('T')[0];
      setValue('checkOut', formattedCheckOut);
    }
    // 計算が終わったらフラグをリセット
    isManualNightsChange.current = false;
  }, [nights, checkIn, setValue]);

  // 泊数が手動で変更されたときの処理
  const handleNightsChange = (e) => {
    isManualNightsChange.current = true; // 手動変更フラグを立てる
    setValue('nights', e.target.value);
  };

  return (
    <div className="header-container">
      <div className="form-group">
        <div className="header-upper">
          <label>
            <span>チェックイン:</span>
            <input
              type="date"
              {...register('checkIn')}
              defaultValue={formData.checkIn}
            />
            {errors.checkIn && <p className="error">{errors.checkIn.message}</p>}
          </label>
          <label>
            <span>チェックアウト:</span>
            <input
              type="date"
              {...register('checkOut')}
              defaultValue={formData.checkOut}
            />
            {errors.checkOut && <p className="error">{errors.checkOut.message}</p>}
          </label>
        </div>
        <div className="header-lower">
          <label>
            <span>泊数:</span>
            <input
              type="number"
              {...register('nights')}
              defaultValue={formData.nights}
              min="1"
              onChange={handleNightsChange} // 手動変更を検知
            />
            {errors.nights && <p className="error">{errors.nights.message}</p>}
          </label>
          <label>
            <span>人数:</span>
            <input
              type="number"
              {...register('guests')}
              defaultValue={formData.guests}
              min="1"
            />
            {errors.guests && <p className="error">{errors.guests.message}</p>}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
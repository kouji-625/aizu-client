import '../../styles/cutomer-info/ReservationSummary.css';

const ReservationSummary = ({ reservation }) => {
  // 料金と合計を計算
  const price = reservation.roomDetails.price; // 1泊1名あたりの料金
  const totalPrice = reservation.totalPrice || price * reservation.nights * reservation.guests; // 合計料金

  return (
    <div>
      <div className="summary-title">
        <h2>予約内容</h2>
      </div>
      <div className="summary-container">
        <img
          src={reservation.roomDetails.image} // バックエンドから取得した画像URL
          alt={reservation.roomType}
        />
        <p className="summary-item">
          <span>部屋タイプ:</span> {reservation.roomType}
        </p>
        <p className="summary-item">
          <span>チェックイン:</span>{' '}
          {new Date(reservation.checkIn).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
        </p>
        <p className="summary-item">
          <span>チェックアウト:</span>{' '}
          {new Date(reservation.checkOut).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
        </p>
        <p className="summary-item">
          <span>宿泊数:</span> {reservation.nights}泊
        </p>
        <p className="summary-item">
          <span>宿泊人数:</span> {reservation.guests}名
        </p>
       {/* <p className="summary-item">
          <span>料金（1泊1名あたり）:</span> ¥{price.toLocaleString()}
        </p>*/}
        <p className="summary-item total-amount">
          <span>合計:</span> ¥{totalPrice.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ReservationSummary;
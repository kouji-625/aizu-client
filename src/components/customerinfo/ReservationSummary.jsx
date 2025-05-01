import '../../styles/cutomer-info/ReservationSummary.css';

const ReservationSummary = ({ reservation }) => {
  // roomDetails が存在しない場合のデフォルト値
  const roomDetails = reservation.roomDetails || {
    price: 0,
    image: 'https://via.placeholder.com/150', // プレースホルダー画像
    name: '不明',
  };

  // 料金と合計を計算
  const price = roomDetails.price; // 1泊1名あたりの料金
  const totalPrice = reservation.totalPrice || price * reservation.nights * reservation.guests; // 合計料金

  // 日付フォーマットの安全性を確保
  const formatDate = (date) => {
    if (!date) return '未入力';
    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime())
      ? '無効な日付'
      : parsedDate.toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
  };

  return (
    <div>
      <div className="summary-title">
        <h2>予約内容</h2>
      </div>
      <div className="summary-container">
        <img src={roomDetails.image} alt={reservation.roomType || '部屋'} />
        <p className="summary-item">
          <span>部屋タイプ:</span> {reservation.roomType || '未入力'}
        </p>
        <p className="summary-item">
          <span>チェックイン:</span> {formatDate(reservation.checkIn)}
        </p>
        <p className="summary-item">
          <span>チェックアウト:</span> {formatDate(reservation.checkOut)}
        </p>
        <p className="summary-item">
          <span>宿泊数:</span> {reservation.nights || '未入力'}泊
        </p>
        <p className="summary-item">
          <span>宿泊人数:</span> {reservation.guests || '未入力'}名
        </p>
        {/* <p className="summary-item">
          <span>料金（1泊1名あたり）:</span> ¥{price.toLocaleString()}
        </p> */}
        <p className="summary-item total-amount">
          <span>合計:</span> ¥{totalPrice.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ReservationSummary;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/reserved-form/RoomList.css';

const RoomList = ({ formData, setValue }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRoomSelect = (room) => {
    console.log('handleRoomSelect called with room:', room); // デバッグ用
    try {
      // フォーム状態を更新
      console.log('Setting roomId:', room._id); // roomId をログ出力
      setValue('roomType', room.name.toLowerCase());
      setValue('roomId', room._id);
      setValue('totalPrice', room.price * formData.guests * formData.nights);

      // バックエンドから取得した部屋情報を含む formData
      const updatedFormData = {
        ...formData,
        roomType: room.name.toLowerCase(),
        roomId: room._id,
        totalPrice: room.price * formData.guests * formData.nights,
        roomDetails: {
          price: room.price,
          image: room.image,
          name: room.name,
        },
      };
      console.log('Updated formData:', updatedFormData); // デバッグ用
      navigate('/customer-info', { state: { formData: updatedFormData } });
      console.log('Navigate called'); // デバッグ用
    } catch (err) {
      console.error('Error in handleRoomSelect:', err); // エラーをキャッチ
    }
  };

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/rooms`)
        if (!response.ok) {
          throw new Error('データの取得に失敗しました');
        }
        const data = await response.json();
        setRooms(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>エラー: {error}</div>;
  }

  return (
    <div className="room-list-container">
      {rooms.map((room) => (
        <div key={room._id} className="room-option">
          <h3>{room.name}</h3>
          <p className="room-txt1">
            {room.description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <img src={room.image} alt={room.name} />
          <div className="room-price-area">
            <div className="room-price">
              <div className="room-price-left">
                <p>通常価格/1名</p>
                <span>{room.price.toLocaleString()}</span>
              </div>
              <div className="room-total">
                <p>合計金額</p>
                <span className="price-total">
                  ¥{(room.price * formData.guests * formData.nights).toLocaleString()}
                </span>
              </div>
              <div className="room-submit">
                <button
                  type="button"
                  onClick={() => {
                    console.log('Button clicked for room:', room._id); // デバッグ用
                    handleRoomSelect(room);
                  }}
                >
                  この部屋を選択
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
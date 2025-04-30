import * as yup from 'yup';

const today = new Date().toISOString().split('T')[0]; // 今日の日付（YYYY-MM-DD）

const reservationSchema = yup.object().shape({
  checkIn: yup
    .string()
    .required('チェックイン日は必須です')
    .test('is-future-date', 'チェックイン日は今日以降を選択してください', (value) => {
      return value >= today;
    }),
  checkOut: yup
    .string()
    .required('チェックアウト日は必須です')
    .test('is-after-checkin', 'チェックアウト日はチェックイン日以降を選択してください', function (value) {
      const { checkIn } = this.parent;
      return checkIn && value > checkIn;
    }),
  nights: yup
    .number()
    .typeError('泊数は数値を入力してください')
    .min(1, '1泊以上を選択してください')
    .required('泊数を入力してください'),
  guests: yup
    .number()
    .typeError('人数は数値を入力してください')
    .min(1, '1人以上を選択してください')
    .required('人数を入力してください'),
  roomType: yup
    .string()
    .required('部屋タイプを選択してください'),
});

export default reservationSchema;
import React from "react";
import '../../styles/reserved-form/ReservedFooter.css';


const ReservedFooter = () => {
    return(
        <>
        <div className="footer-container">
            <h2 className="footer-title">【宿泊に関するご案内】</h2>
            <h3 className="policy">キャンセルポリシー</h3>
            <table>
                <tbody>
                    <tr>
                        <th>・当日</th>
                        <td>料金の100%</td>
                    </tr>
                    <tr>
                        <th>・前日</th>
                        <td>料金の80%</td>
                    </tr>
                    <tr>
                        <th>・2日前</th>
                        <td>料金の50%</td>
                    </tr>
                    <tr>
                        <th>・3日前</th>
                        <td>キャンセル：無料</td>
                    </tr>
                </tbody>
            </table>
            <span>※お電話かメールにてご連絡をお願いいたします。</span>
            <section className="payment">
                <h3>お支払方法</h3>
                <ul>
                    <li>・クレジットカード</li>
                    <li>・現地決済</li>
                </ul>
            </section>
            <address>〒111-111 福島県会津若松市1-11-1</address>
            <span className="tel">TEL：111-11-1111</span>
            <span className="e-mail">E-MAIL：abc@exmaple.co.jp</span>
        </div>
        </>
    )
}
export default ReservedFooter;
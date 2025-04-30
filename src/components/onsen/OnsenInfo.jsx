import React from "react";
import '../../styles/onsen/OnsenInfo.css';

const OnsenInfo = () => {
    return (
        <>
        <div className="onsen-info-area">
        <div className="onsen-info-container">
         <table>
            <tbody>
                <tr>
                    <th>泉質</th>
                    <td>硫酸塩泉</td>
                </tr>
                <tr>
                    <th>源泉温度</th>
                    <td>48℃</td>
                </tr>
                <tr>
                    <th>効能</th>
                    <td>肩こり、冷え性、疲労回復、健康増進、筋肉痛、神経痛</td>
                </tr>
                <tr>
                    <th>禁忌症</th>
                    <td>過敏症の方</td>
                </tr>
            </tbody>
         </table>
         </div>
        </div>
        </>
    )
}
export default OnsenInfo;
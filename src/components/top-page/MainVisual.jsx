import React, { useEffect, useRef } from "react";
import '../../styles/top-page/MainVisual.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import movie1 from '../../assets/images/top-page/aizu-top1.mp4'
import movie2 from '../../assets/images/top-page/aizu-top2.mp4'
import Slider from "react-slick"; 



const MainVisual = () => {
    const sliderRef = useRef(); // ← Refオブジェクトを作る
    
    const settings = {
        dots: false, // ドットナビゲーションを非表示（必要ならtrueに）
        infinite: true, // 無限ループ
        speed: 3000, // スライド切り替えのアニメーション速度（ミリ秒）
        slidesToShow: 1, // 一度に表示するスライド数
        slidesToScroll: 1, // 一度にスクロールするスライド数
        autoplay: false, // 自動再生を有効化
       // autoplaySpeed: 3000, // 18秒（18000ミリ秒）ごとに切り替え
        arrows: false, // 矢印ナビゲーションを非表示（必要ならtrueに）
        fade: true //フェードイン
      };
    
  // 12秒ごとにスライド切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 12000); // ← 12秒（12000ms）

    return () => clearInterval(interval); // クリーンアップ
  }, []);　//deps空配列、初回レンダリング時のみ処理実行

    return (
        <>
            <div className="main-visual">
            <Slider {...settings} ref={sliderRef}> 
                <div className="main-moovie">
                <video id="video1" className="movie" autoPlay preload="auto" loop playsInline muted>
                   <source src={movie1} type="video/mp4" />
                </video>
                </div>
                <div className="main-moovie">
              <video id="video2" className="movie" autoPlay preload="auto" loop playsInline muted>
               <source src={movie2} type="video/mp4" />
                </video>
                </div>
            </Slider>
            </div>
            <div className="header-logo"><h1>AIZU</h1><span>東北の温泉施設</span></div>
             <div className="main-visual-concept">
                <h2>自然の中で、<br /><span>温まる</span></h2>
             </div>

        </>
    )
}
export default MainVisual;


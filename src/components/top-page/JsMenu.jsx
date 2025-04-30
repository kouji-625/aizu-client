import React, {useState} from 'react';
import '../../styles/top-page/JsMenu.css'


    const JsMenu = () => {
        const [isOpen, setIsOpen] = useState(false); //メニューが空いているか記録する変数
      
        const toggleMenu = () => {
          setIsOpen(prev => !prev); //今の状態を反転する
        };
      

    return (
        <>
       <button
        className={`js-menu ${isOpen ? "open" : ""}`}//isOpen が true のときだけ "open" クラスを追加
        onClick={toggleMenu}//ddEventListener('click', function()に相当
        aria-label="メニューを開く"
       ></button>               
      
       <nav className={`js-nav ${isOpen ? "open" : ""}`}>
            <div className="js-nav-container">
                <div className="js-nav-left">
                    <h1>AIZU</h1>
                    <span>東北の温泉施設</span>
                    <address>〒390-1520 福島県会津若松市1-1-1</address>
                </div>
            <div className="js-nav-centur">
                    <ul>
                        <li><a href="#"><span>information</span></a></li>
                        <li><a href="#"><span>温泉</span></a></li>
                        <li><a href="#"><span>施設</span></a></li>
                        <li><a href="#"><span>部屋</span></a></li>
                        <li><a href="#"><span>食事</span></a></li>
                        <li><a href="#"><span>Gallery</span></a></li>
                    </ul>
                </div>
                <div className="js-nav-right">
                    <ul>
                        <li><a href="#"><span>お問い合わせ</span></a></li>
                        <li><a href="#"><span>アクセス</span></a></li>
                        <li><a href="#"><span>プライバシーポリシー</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>

        </>
    )
}

export default JsMenu;
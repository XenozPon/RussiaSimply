import React, { useState } from 'react';
import '../App.css';
import icon from '../images/icon.png';
// import { Outlet, Link } from "react-router-dom";

const Header = () => {



    const [Visible, setVisible] = useState(false);

    return (
        <div className={"Header__wrapper"}>
            <header className={"Header"}>

                <div className="wrap__nav__items">
                    <a className={"nav__item"} href="../../public/index.html">Главная</a>
                    <a className={"nav__item"} href="/#management">Как пользоваться сайтом</a>
                    <a className={"nav__item"} href="/#HELPBAR">Консультационный блок</a>
                    <a className={"nav__item"} href="../../public/index.html">Предложить свой кейс</a>
                    <a className={"nav__item"} href="https://t.me/testg12t_bot">Нейросеть</a>
                </div>

                <div className={"navi__item__icon"} onClick={() => setVisible(!Visible)}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                         viewBox="0 0 52 52">
                        <path
                            d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z"></path>
                    </svg>
                </div>
            </header>
            {(Visible &&
                <div className="wrap__navbar__onPhone" id={'onPhone'}>22332
                    <div className="wrap__nav__items__onPhone">
                        <div className={"nav__item icon__nav__item"} onClick={() => setVisible(!Visible)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                            </svg>
                        </div>
                        <hr/>
                        <a className={"nav__item"} href="../../public/index.html" onClick={() => setVisible(!Visible)}>Main</a>
                        <a className={"nav__item"} href="../../public/index.html" onClick={() => setVisible(!Visible)}>Community</a>
                        <a className={"nav__item"} href="../../public/index.html" onClick={() => setVisible(!Visible)}>Education</a>
                        <a className={"nav__item"} href="../../public/index.html" onClick={() => setVisible(!Visible)}>Personal account</a>

                    </div>
                </div>
            )}



        </div>
    );
};

export default Header;
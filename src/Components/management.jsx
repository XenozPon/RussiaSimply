import React from 'react';
import './../App.css';
import translate from './../images/translate.png'
import trlst from './../images/trlst.png'
import helpbar from './../images/helpbar.png'

const Management = () => {
    return (
        <div id = "management">
            <br/><br/><br/>
            <div className="guide-container">
                <h2>Руководство по эксплуатации сайта</h2>

                <div className="instruction-section">


                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h4>Откройте меню браузера</h4>
                            <p>Найдите иконку с тремя вертикальными точками
                                <span className="menu-example">︙</span>
                                в правом верхнем углу браузера</p>
                            <div className="language-example">
                                <img src={trlst} alt="Пример выбора языка"/>
                            </div>

                        </div>
                    </div>

                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h4>Из списка выберите "Перевести" или "Перевести страницу"</h4>
                            <p>В правой части выберите нужный язык из выпадающего списка</p>
                            <div className="language-example">
                                <img src={translate} alt="Пример выбора языка"/>
                            </div>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h4>Перейдите по ссылке</h4>
                            <p>Нажмите на появившуюся ссылку в правом поле для перевода</p>
                        </div>
                    </div>

                    <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h4>Как выбрать полезную информацию</h4>
                            <p>Ниже выберите нужный Вам кейс или воспользуйтесь поиском</p>
                            <div className="language-example">
                                <img src={helpbar} alt="Пример выбора языка"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="additional-info">
                    <p>Если возникли проблемы, вы можете:</p>
                    <ul>
                        <li>Использовать автоматическое определение языка</li>
                        <li>Проверить настройки браузера</li>
                        <li>Обратиться к поиску</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Management;
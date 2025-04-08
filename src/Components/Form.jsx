import React from 'react';

const Form = () => {
    return (
        <div id="formix">
            <div className="form-container">
                <div className="info-icon">
                    ?
                    <div className="info-tooltip">
                        Это форма, в которой вы можете предложить свой кейс
                    </div>
                </div>

                <h2>Форма обратной связи</h2>

                <form>
                    <div className="form-group">
                        <label htmlFor="case-title">Название кейса</label>
                        <input type="text" id="case-title" name="case-title" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="case-text">Текст</label>
                        <textarea id="case-text" name="case-text" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Ваш email для обратной связи</label>
                        <input type="email" id="email" name="email" required/>
                    </div>

                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
import React from 'react';
import emailjs from 'emailjs-com';
const Form = () => {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_simplerussia', 'template_gc45bm8', e.target, 'P13ou8777pqiJaGjJ')
            .then((result) => {
                alert("Форма отправлена, сайт перезагружен");
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            }, (error) => {
                console.log(error.text);
            });
    }




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

                <form  onSubmit={sendEmail} method="POST">
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

                    <button type="submit" name="submit" className="submit send-form btn"
                    > Отправить форму
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
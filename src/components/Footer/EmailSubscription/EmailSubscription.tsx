import React, { FC } from 'react';

import './EmailSubscription.css';

type PropsType = {}

const EmailSubscription: FC<PropsType> = (props) => {
    return (
        <div className="email-subscription">
            <div className="email-subscription__heading">
                <h2 className="email-subscription__title">СКИДКА 10% за подписку</h2>
                <p className="email-subscription__subtitle">
                    на наши новости.
                        <a href="/" className="email-subscription__conditions-link">Условия акции</a>
                </p>
            </div>
            <div className="email-subscription__body">
                <input type="text" placeholder="Введите свой email" className="email-subscription__input" />
                <button className="email-subscription__button">Женщинам</button>
                <button className="email-subscription__button">Мужчинам</button>
            </div>
        </div>
    )
}

export default EmailSubscription;
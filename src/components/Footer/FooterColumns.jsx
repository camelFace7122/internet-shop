import React from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';

const FooterColumnIcon = ({socialIcon, paymentIcon, appIcon}) => {
    return (
        <>
            {
                (socialIcon || appIcon) &&
                <a href="/" target="_blank" className={cn('footer__col-icon', `footer__icon-${socialIcon || appIcon}`)}></a>
                || 
                paymentIcon &&
                <i className={cn('footer__col-icon', 'footer__icon-payment' ,`footer__icon-${paymentIcon}`)}></i>
            }
        </>
    )
}

const FooterColumns = ({footer}) => {
    
    let socialIcons = footer.socialIcons.map(social => {
        return <FooterColumnIcon socialIcon={social} />
    })

    let paymentIcons = footer.paymentIcons.map(payment => {
        return <FooterColumnIcon paymentIcon={payment} />
    })

    let appIcons = footer.appIcons.map(app => {
        return <FooterColumnIcon appIcon={app} />
    })

    return (
        <div className="footer__columns wrapper">
            <div className="footer__col">
                <p className="footer__col-title">Помощь</p>
                <div className="footer__col-item">
                    <a href="/" className="footer__col-link">Статус заказа по номеру</a>
                </div>
                <div className="footer__col-item">
                    <a href="/" className="footer__col-link">Центр поддержки Lamoda</a>
                </div>
                <div className="footer__col-item">
                    <a href="/" className="footer__col-link">Как оформить заказ</a>
                </div>
                <div className="footer__col-item">
                    <a href="/" className="footer__col-link">Как выбрать размер</a>
                </div>
                <div className="footer__col-item">
                    <a href="/" className="footer__col-link">Условия доставки</a>
                </div>
                <div className="footer__col-item">
                    <a href="/" className="footer__col-link">Мои заказы</a>
                </div>
                <div className="footer__col-item">
                    <a href="/" className="footer__col-link">Возврат</a>
                </div>
                <div className="footer__col-item">
                    <a href="/" className="footer__col-link">Публичная оферта</a>
                </div>
                <div className="footer__col-item">
                    <a href="/" className="footer__col-link">Программа лояльности</a>
                </div>
                <div className="footer__col-item">
                    <a href="/" className="footer__col-link">Товары партнёров</a>
                </div>
            </div>
            <div className="footer__col">
                <p className="footer__col-title">Мы в соцсетях</p>
                <div className="footer__col-icons">
                    {socialIcons}
                </div>
                <p className="footer__col-title">Партнерам</p>
                <div className="footer__col-item">
                    <a href="/" className="footer__col-link">Подключиться к партнерской программе "Маркетплейс"</a>                
                </div>
            </div>
            <div className="footer__col">
                <p className="footer__col-title">Способы оплаты</p>
                <div className="footer__col-icons">
                    {paymentIcons}
                </div>
                <div className="footer__col-item footer__text">
                    Вы можете оплатить покупки <br />
                    наличными при получении, либо <br /> 
                    выбрать <a href="/" className="footer__link">другой способ оплаты</a>.                
                </div>
            </div>

            <div className="footer__col">
                <p className="footer__col-title">Для мобильных устройств</p>
                <div className="footer__col-icons">
                    {appIcons}
                </div>
                <div className="footer__col-item footer__text">
                    Вы также можете перейти <br />
                    на <a href="/" className="footer__link">мобильную версию сайта</a>.                
                </div>
            </div>
        </div>
    )
}

const mstp = (state) => {
    return {
        footer: state.footer.footer,
    }
}
const mdtp = (dispatch) => {
    return {}
}

export default connect(mstp, mdtp)(FooterColumns);

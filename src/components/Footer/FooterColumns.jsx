import React from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';

const FooterColumnIcon = ({icon}) => {
    return (
        <a href="/" target="_blank" className={cn('footer__col-icon', `footer__social-${icon}`)}></a>
    )
}

const FooterColumns = ({footer}) => {
    let socialIcons = footer.socialIcons.map(icon => {
        return <FooterColumnIcon icon={icon} />
    })

    return (
        <div className="footer__columns">
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

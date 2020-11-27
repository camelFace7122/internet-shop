import React, { FC } from 'react';

import './FooterLocal.css';

type PropsType = {}

const FooterLocal: FC<PropsType> = (props) => {
    return (
        <div className="footer__local">
            <div className="footer__local-container wrapper">
                <div className="footer__local-item">
                    <i className={`icon-flag-kz`}></i>
                    Казахстан - 
                    <span className="footer__link">сменить страну</span>
                </div>
            </div>
        </div>
    )
}

export default FooterLocal
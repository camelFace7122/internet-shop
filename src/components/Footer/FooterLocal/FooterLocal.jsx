import React from 'react';
import {connect} from 'react-redux';

import './FooterLocal.css';

const FooterLocal = (props) => {
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

const mstp = (state) => {
    return {
        footer: state.footer.footer.countryIcons,
    }
}
const mdtp = (dispatch) => {
    return {}
}

export default connect(mstp, mdtp)(FooterLocal);
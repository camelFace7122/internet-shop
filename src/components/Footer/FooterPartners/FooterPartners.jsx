import React from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';

import './FooterPartners.css';

const FooterPartnersImage = ({progress, partner}) => {
        return <i className={cn('footer__partners-image', {[`footer__partner-${partner}`]: partner}, {[`footer__progress-${progress}`]: progress} )}></i>
}

const FooterPartners = ({progress, partners}) => {
    let progressImages = progress.map(image => {
        return (
            <FooterPartnersImage progress={image} />
        )
    })

    let partnersImages = partners.map(image => {
        return (
            <FooterPartnersImage partner={image} />
        )
    })

    return (
        <div className="footer__partners">
            <div className="footer__partners-wrapper">
                <div className="footer__progress-wrapper">
                    <div className="footer__partners-title">
                        Наши достижения
                    </div>
                    <div className="footer__partners-images">
                        {progressImages}
                    </div>
                </div>
                <div className="footer__progress-wrapper">
                    <div className="footer__partners-title">
                        Наши друзья и партнеры
                    </div>
                    <div className="footer__partners-images">
                        {partnersImages}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mstp = (state) => {
    return {
        progress: state.footer.footer.progress,
        partners: state.footer.footer.partners,
    }
}
const mdtp = (dispatch) => {
    return {}
}

export default connect(mstp, mdtp)(FooterPartners);
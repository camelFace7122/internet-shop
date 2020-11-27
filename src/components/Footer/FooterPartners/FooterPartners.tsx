import React, { FC } from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';

import './FooterPartners.css';
import { AppStateType } from '../../../redux/store';

type FooterPartnersImagePropsType = {
    progress?: string
    partner?: string
}

type FooterPartnersPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    progress: Array<string>
    partners: Array<string>
}

type MapDispatchToPropsType = {}

type OwnPropsType = {}

const FooterPartnersImage: FC<FooterPartnersImagePropsType> = ({progress, partner}) => {
        return <i className={cn('footer__partners-image', {[`footer__partner-${partner}`]: partner}, {[`footer__progress-${progress}`]: progress} )}></i>
}

const FooterPartners: FC<FooterPartnersPropsType> = ({progress, partners}) => {
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

const mstp = (state: AppStateType) => {
    return {
        progress: state.footer.footer.progress,
        partners: state.footer.footer.partners,
    }
}
const mdtp = (dispatch: any) => {
    return {}
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, mdtp)(FooterPartners);
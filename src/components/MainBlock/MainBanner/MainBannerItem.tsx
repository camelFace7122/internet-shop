import React, { FC } from 'react';
import { TeaserItemType } from '../../../types/types';
import TeaserOverlay from '../../common/TeaserOverlay/TeaserOverlay';

type PropsType = TeaserItemType

const MainBannerItem: FC<PropsType> = ({picture, title, subtitle}) => {
    return (
        <div className="main__banner_item">
            <a href="/" className="main__banner_item_content">
                <TeaserOverlay>
                    <img src={picture} alt="Sales" className="main__banner__image" />
                </TeaserOverlay>
                <div className="main__banner_text">
                    <p className="main__banner_text_title">{title}</p>
                    <p className="main__banner_text_subtitle">{subtitle}</p>
                </div>
            </a>
        </div>
    )
}

export default MainBannerItem;
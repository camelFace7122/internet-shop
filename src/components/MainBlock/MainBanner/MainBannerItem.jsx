import React from 'react';
import TeaserOverlay from '../../common/TeaserOverlay/TeaserOverlay';

const MainBannerItem = ({picture, title, subtitle}) => {
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
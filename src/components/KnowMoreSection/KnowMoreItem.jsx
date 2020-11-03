import React from 'react';
import TeaserOverlay from './../common/TeaserOverlay/TeaserOverlay';

const KnowMoreItem = ({picture, title, subtitle}) => {
    return (
        <div className="knowMore__item">
            <a href="/" className="knowMore__item__container">
                <div className='knowMore__item_image' style={{backgroundImage: `url(${picture})`}}>
                    <TeaserOverlay />
                </div>
                <div className="knowMore__item_text">
                    <p className="knowMore__item_title">{title}</p>
                    <p className="knowMore__item_subtitle">{subtitle}</p>
                </div>
            </a>
        </div>
    )    
}

export default KnowMoreItem;

import React from 'react';
import TeaserOverlay from './../common/TeaserOverlay/TeaserOverlay';

const WideCarouselItem = ({picture}) => {
    return (
        <div className="wideCarousel__item">
            <a href="/" className="wideCarousel__image" style={{backgroundImage: `url(${picture})`}}>
                <TeaserOverlay />
            </a>
        </div>
    )
}

export default WideCarouselItem;
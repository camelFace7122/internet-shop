import React, { FC } from 'react';
import { WideCarouselItemType } from '../../types/types';
import TeaserOverlay from '../common/TeaserOverlay/TeaserOverlay';

type PropsType = WideCarouselItemType

const WideCarouselItem: FC<PropsType> = ({picture}) => {
    return (
        <div className="wideCarousel__item">
            <a href="/" className="wideCarousel__image" style={{backgroundImage: `url(${picture})`}}>
                <TeaserOverlay />
            </a>
        </div>
    )
}

export default WideCarouselItem;
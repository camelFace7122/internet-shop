import React, { FC } from 'react';
import { TeaserItemType } from '../../types/types';
import TeaserOverlay from '../common/TeaserOverlay/TeaserOverlay';

type PropsType = TeaserItemType

const ActualItem: FC<PropsType> = ({picture, title, subtitle}) => {
    return (
        <a href="/" className="actual__item">
            <div className='actual__item_image' style={{backgroundImage: `url(${picture})`}}>
                <TeaserOverlay />
            </div>
            <div className="actual__item_text">
                <p className="actual__item_title">{title}</p>
                <p className="actual__item_subtitle">{subtitle}</p>
            </div>
        </a>
    )    
}

export default ActualItem;

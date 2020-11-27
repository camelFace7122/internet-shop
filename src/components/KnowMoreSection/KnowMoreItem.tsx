import React, { FC } from 'react';
import { KnowMoreItemType } from '../../types/types';
import TeaserOverlay from '../common/TeaserOverlay/TeaserOverlay';

type PropsType = KnowMoreItemType

const KnowMoreItem: FC<PropsType> = ({picture, title, subtitle}) => {
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

import React, { FC, PropsWithChildren } from 'react';
import './TeaserOverlay.css';

type PropsType = PropsWithChildren<{text?: string}>

const TeaserOverlay: FC<PropsType> = ({children, text = 'Купить'}) => {
    return (
        <div className="teaser_overlay">
            <a href="/" className="teaser_buy_link">{text}</a>
            {children}
        </div>
    )
}

export default TeaserOverlay;
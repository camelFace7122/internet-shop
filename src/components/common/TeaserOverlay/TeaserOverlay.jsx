import React from 'react';
import './TeaserOverlay.css';

const TeaserOverlay = ({children, text = 'Купить'}) => {
    return (
        <div className="teaser_overlay">
            <a href="/" className="teaser_buy_link">{text}</a>
            {children}
        </div>
    )
}

export default TeaserOverlay;
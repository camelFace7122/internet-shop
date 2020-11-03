import React from 'react';
import './TeaserOverlay.css';

const TeaserOverlay = ({children}) => {
    return (
        <div className="teaser_overlay">
            <a href="/" className="teaser_buy_link">Купить</a>
            {children}
        </div>
    )
}

export default TeaserOverlay;
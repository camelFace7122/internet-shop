import React from 'react';
import TeaserOverlay from '../../common/TeaserOverlay/TeaserOverlay';
import './MainTeaserLong.css';

const MainTeaserLong = ({link}) => {
    return (
        <div className="main__teaser_long">
            <a className="teaser_long" href={link}>
                <TeaserOverlay />
            </a>
        </div>
    )
}

export default MainTeaserLong;
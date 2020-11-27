import React, { FC } from 'react';
import TeaserOverlay from '../../common/TeaserOverlay/TeaserOverlay';
import './MainTeaserLong.css';

type PropsType = {
    link: string
}

const MainTeaserLong: FC<PropsType> = ({link}) => {
    return (
        <div className="main__teaser_long">
            <a className="teaser_long" href={link}>
                <TeaserOverlay />
            </a>
        </div>
    )
}

export default MainTeaserLong;
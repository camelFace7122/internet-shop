import React, { FC } from 'react';
import AuthModal from './AuthModal/AuthModal';
import RegionModal from './RegionModal/RegionModal';

import './Widgets.css';

type PropsType = {}

const Widgets: FC<PropsType> = (props) => {
    return (
        <div className="widgets">
            <AuthModal />
            <RegionModal />
        </div>
    )
}

export default Widgets;
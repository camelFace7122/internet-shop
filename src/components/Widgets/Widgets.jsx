import React from 'react';
import AuthModal from './AuthModal/AuthModal';
import RegionModal from './RegionModal/RegionModal';

import './Widgets.css';

const Widgets = (props) => {
    return (
        <div className="widgets">
            <AuthModal />
            <RegionModal />
        </div>
    )
}

export default Widgets;
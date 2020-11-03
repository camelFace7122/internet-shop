import React from 'react';
import { connect } from 'react-redux';
import ActualItem from './ActualItem';

import './ActualSection.css';

const ActualSection = ({ women }) => {
    let actualItems = women.map(item => {
        return (
            <ActualItem {...item} />
        )
    })

    return (
        <div className='actual'>
            <div className="actual__container wrapper">
                <h2 className="actual__title"><span>Актуально</span></h2>
                <div className="actual__box">
                    {actualItems}
                </div>
            </div>
        </div>
    )
}

const mstp = (state) => {
    return {
        women: state.actual.women,
    }
}
const mdtp = (dispatch) => {
    return {}
}

export default connect(mstp, mdtp)(ActualSection);
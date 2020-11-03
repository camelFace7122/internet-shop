import React from 'react';
import { connect } from 'react-redux';
import KnowMoreItem from './KnowMoreItem';

import './KnowMoreSection.css';

const KnowMoreSection = ({ women }) => {

    let knowMoreItems = women.map(item => {
        return (
            <KnowMoreItem {...item} />
        )
    })

    return (
        <div className="knowMore">
            <div className="knowMore__container wrapper">
                <h2 className="knowMore__title">
                    <span>Узнайте больше</span>
                </h2>
                <div className="knowMore__box">
                    {knowMoreItems}
                </div>
            </div>
        </div>
    )
}

const mstp = (state) => {
    return {
        women: state.knowMore.women,
    }
}
const mdtp = (dispatch) => {
    return {}
}

export default connect(mstp, mdtp)(KnowMoreSection);
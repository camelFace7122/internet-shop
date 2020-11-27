import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { KnowMoreItemsType } from '../../types/types';
import KnowMoreItem from './KnowMoreItem';

import './KnowMoreSection.css';

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    women: KnowMoreItemsType
}

type MapDispatchToPropsType = {}

type OwnPropsType = {}

const KnowMoreSection: FC<PropsType> = ({ women }) => {

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

const mstp = (state: AppStateType) => {
    return {
        women: state.knowMore.women,
    }
}
const mdtp = (dispatch: any) => {
    return {}
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, mdtp)(KnowMoreSection);
import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { TeaserItemsType } from '../../types/types';
import ActualItem from './ActualItem';

import './ActualSection.css';

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    women: TeaserItemsType
}

type MapDispatchToPropsType = {}

type OwnPropsType = {}

const ActualSection: FC<PropsType> = ({ women }) => {
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

const mstp = (state: AppStateType) => {
    return {
        women: state.actual.women,
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, {})(ActualSection);
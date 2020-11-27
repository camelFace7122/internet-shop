import React, { FC } from 'react'
import {connect} from 'react-redux';
import CustomTooltip from '../../../common/MaterialUI/CustomTooltip';
import {toggleRegionModal} from '../../../../redux/reducers/widgets-reducer/widgets-reducer';
import {confirmUserRegion} from '../../../../redux/reducers/header-reducer/header-reducer';
import {getRegionIsConfirmed, getUserRegion} from '../../../../redux/reducers/header-reducer/header-selectors';
import GeoTip from './GeoTip';

import styles from './HeaderTopGeo.module.css';
import { AppStateType } from '../../../../redux/store';

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    region: string
    regionIsConfirmed: boolean
}

type MapDispatchToPropsType = {
    toggleRegionModal: (isOpen: boolean) => void
    confirmUserRegion: () => void
}

type OwnPropsType = {}

const HeaderTopGeo: FC<PropsType> = ({region, regionIsConfirmed, toggleRegionModal, confirmUserRegion}) => {
    const handleClick = () => {
        toggleRegionModal(true);
    }

    let headerTopGeoElement = (
        <div className={styles.header__top_geo} onClick={handleClick}>
            {!regionIsConfirmed && <div className={styles.header__redDot}>
            </div>}
            <div className={styles.header__location}>
                Ваш регион доставки:
                {' ' + region}
            </div>
        </div>
    )

    if (!regionIsConfirmed) {
        return (
            <CustomTooltip content={<GeoTip region={region} confirmUserRegion={confirmUserRegion} toggleRegionModal={toggleRegionModal} />} 
                           arrow={true}
            >
                {headerTopGeoElement}
            </CustomTooltip>
        )
    } else {
        return headerTopGeoElement;
    }
}

let mstp = (state: AppStateType) => {
    return {
        region: getUserRegion(state),
        regionIsConfirmed: getRegionIsConfirmed(state), 
    };
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, {
    toggleRegionModal,
    confirmUserRegion,
})(HeaderTopGeo);
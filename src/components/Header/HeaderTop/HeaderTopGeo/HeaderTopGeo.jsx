import {connect} from 'react-redux';
import CustomTooltip from '../../../common/MaterialUI/CustomTooltip';
import {toggleRegionModal} from './../../../../redux/reducers/widgets-reducer/widgets-reducer';
import {confirmUserRegion} from './../../../../redux/reducers/header-reducer/header-reducer';
import {getRegionIsConfirmed, getUserRegion} from './../../../../redux/reducers/header-reducer/header-selectors';
import GeoTip from './GeoTip';

import styles from './HeaderTopGeo.module.css';

const HeaderTopGeo = ({region, regionIsConfirmed, toggleRegionModal, confirmUserRegion}) => {
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
                           customId={'header-top-geo-tooltip'}
                           arrow={true}
            >
                {headerTopGeoElement}
            </CustomTooltip>
        )
    } else {
        return headerTopGeoElement;
    }
}

let mstp = (state) => {
    return {
        region: getUserRegion(state),
        regionIsConfirmed: getRegionIsConfirmed(state), 
    };
}

export default connect(mstp, {
    toggleRegionModal,
    confirmUserRegion,
})(HeaderTopGeo);
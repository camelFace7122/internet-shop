import {connect} from 'react-redux';
import {toggleRegionModal} from './../../../../redux/reducers/widgets-reducer/widgets-reducer';

import styles from './HeaderTopGeo.module.css';

const HeaderTopGeo = ({region, toggleRegionModal}) => {
    const handleClick = () => {
        toggleRegionModal(true);
    }

    return (
        <div className={styles.header__top_geo} onClick={handleClick}>
            <div className={styles.header__redDot}>
            </div>
            <div className={styles.header__location}>
                Ваш регион доставки:
                {' ' + region}
            </div>
        </div>
    )
}

let mstp = (state) => {
    return {};
}

export default connect(mstp, {
    toggleRegionModal,
})(HeaderTopGeo);
import React from 'react';
import styles from './../HeaderBottom.module.css';
import cn from 'classnames';
import {toggleAuthModal} from './../../../../redux/reducers/header-reducer/header-reducer';
import {connect} from 'react-redux';

const UserNav = ({toggleAuthModal}) => {
    const handleAuthClick = () => {
        toggleAuthModal(true);
    }
    
    return (
        <div className={styles.userNav}>
            <a role='button' className={styles.userNav__item} onClick={handleAuthClick}>Войти</a>
            <a href='/checkout/cart/' role='button' className={cn(styles.userNav__item, styles.userNav__basket)}>
                <div className={styles.userNav__basketIcon}></div>
                <span>Корзина</span>
            </a>
        </div>
    )
}

let mstp = (state) => {
    return {
    }
}


export default connect(mstp, {
    toggleAuthModal,
})(UserNav);
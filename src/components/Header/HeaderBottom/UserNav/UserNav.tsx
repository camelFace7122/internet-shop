import React, { FC } from 'react';
import styles from './../HeaderBottom.module.css';
import cn from 'classnames';
import {toggleAuthModal} from '../../../../redux/reducers/widgets-reducer/widgets-reducer';
import {connect} from 'react-redux';
import { AppStateType } from '../../../../redux/store';

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {}

type MapDispatchToPropsType = {
    toggleAuthModal: (isOpen: boolean) => void
}

type OwnPropsType = {} 

const UserNav: FC<PropsType> = ({toggleAuthModal}) => {
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

let mstp = (state: AppStateType) => {
    return {
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, {
    toggleAuthModal,
})(UserNav);
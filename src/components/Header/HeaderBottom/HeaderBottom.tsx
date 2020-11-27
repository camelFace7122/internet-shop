import React, { FC } from 'react';
import HeaderBottomGenders from './HeaderBottomGenders/HeaderBottomGenders';
import UserNav from './UserNav/UserNav';
import styles from './HeaderBottom.module.css';
import cn from 'classnames';

type PropsType = {}

const HeaderBottom: FC<PropsType> = (props) => {
    return (
        <div className={cn(styles.header__bottom, 'wrapper')} >
            <HeaderBottomGenders />
            <a href='/' className={styles.header__logo}></a>
            <UserNav />
        </div>
    )
}

export default HeaderBottom;
import React from 'react';
import styles from './../HeaderBottom.module.css';
import cn from 'classnames';

const UserNav = (props) => {
    return (
        <div className={styles.userNav}>
            <a role='button' className={styles.userNav__item}>Войти</a>
            <a href='/checkout/cart/' role='button' className={cn(styles.userNav__item, styles.userNav__basket)}>
                <div className={styles.userNav__basketIcon}></div>
                <span>Корзина</span>
            </a>
        </div>
    )
}

export default UserNav;
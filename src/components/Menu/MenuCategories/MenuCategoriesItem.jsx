import React from 'react';
import cn from 'classnames';
import styles from './../Menu.module.css';

const MenuCategoriesItem = ({content, link, isRed}) => {
    return (
        <a href={link} className={cn(styles.menu__categories_item, {[styles.item__red]: isRed})}>{content}</a>
    )
}

export default MenuCategoriesItem;
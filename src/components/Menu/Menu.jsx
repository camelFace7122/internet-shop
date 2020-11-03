import React from 'react';
import MenuCategoriesContainer from './MenuCategories/MenuCategoriesContainer';
import Search from './Search/Search';
import cn from 'classnames';
import styles from './Menu.module.css';

const Menu = (props) => {
    return (
        <div className={styles.menu}>
            <div className={cn(styles.menu__container, 'wrapper')}>
                <MenuCategoriesContainer />
                <Search />
            </div>
        </div>
    )
}

export default Menu;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MenuCategoriesItem from './MenuCategoriesItem';
import styles from './../Menu.module.css';

const MenuList = ({list}) => {
    let menuItems = list.map(item => {
        return <MenuCategoriesItem content={item.content} link={item.link} isRed={item.isRed} />
    })
    return (
        <>
           {menuItems}
        </>
    )
}

const MenuCategories = ({womenList, menList, kidsList}) => {
    return (
        <nav role="menubar" className={styles.menu__categories}>
            <Switch>
                <Route path='/men-home/' render={ () => <MenuList list={menList} /> } />
                <Route path='/kids-home/' render={ () => <MenuList list={kidsList} /> } />
                <Route path='/' render={ () => <MenuList list={womenList} /> } />
            </Switch>
        </nav>
    )
}

export default MenuCategories;
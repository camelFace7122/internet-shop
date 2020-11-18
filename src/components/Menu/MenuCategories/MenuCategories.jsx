import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import MenuCategoriesItem from './MenuCategoriesItem';
import cn from 'classnames';

const MenuList = ({list, itemIsHovered}) => {
    const [active, setActive] = useState(null);

    let menuItems = list.map((item, index) => {
        return (
            <MenuCategoriesItem content={item.content} link={item.link} isRed={item.isRed} 
                                tabs={item.tabs} setActive={setActive} active={active} index={index} itemisHovered={itemIsHovered} />
        )
    })

    return (
        <>
           {menuItems}
        </>
    )
}

const MenuCategories = ({womenList, menList, kidsList, itemIsHovered}) => {
    return (
        <nav role="menubar" className={cn('menu__categories', {['menu-is-hovered']: itemIsHovered })}>
            <Switch>
                <Route path='/men-home/' render={ () => <MenuList list={menList} itemIsHovered={itemIsHovered} /> } />
                <Route path='/kids-home/' render={ () => <MenuList list={kidsList} itemIsHovered={itemIsHovered} /> } />
                <Route path='/' render={ () => <MenuList list={womenList} /> } itemIsHovered={itemIsHovered} />
            </Switch>
        </nav>
    )
}

export default MenuCategories;
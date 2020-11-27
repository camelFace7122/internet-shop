import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import MenuCategoriesItem from './MenuCategoriesItem';
import cn from 'classnames';
import { MenuListType } from '../../../types/types';
import { AppStateType } from '../../../redux/store';

type MenuListPropsType = {
    list: MenuListType
}

type MenuCategoriesPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    womenList: MenuListType
    menList: MenuListType
    kidsList: MenuListType
    itemIsHovered: boolean 
}

type MapDispatchToPropsType = {}

type OwnPropsType = {}

const MenuList: FC<MenuListPropsType> = ({list}) => {
    const [active, setActive] = useState<number | null>(null);

    let menuItems = list.map((item, index) => {
        return (
            <MenuCategoriesItem content={item.content} link={item.link} isRed={item.isRed} 
                                tabs={item.tabs} setActive={setActive} active={active} index={index} />
        )
    })

    return (
        <>
           {menuItems}
        </>
    )
}

const MenuCategories: FC<MenuCategoriesPropsType> = ({womenList, menList, kidsList, itemIsHovered}) => {
    return (
        <nav role="menubar" className={cn('menu__categories', {['menu-is-hovered']: itemIsHovered })}>
            <Switch>
                <Route path='/men-home/' render={ () => <MenuList list={menList} /> } />
                <Route path='/kids-home/' render={ () => <MenuList list={kidsList} /> } />
                <Route path='/' render={ () => <MenuList list={womenList} /> } />
            </Switch>
        </nav>
    )
}

let mstp = (state: AppStateType) => {
    return {
        womenList: state.menu.womenList,
        menList: state.menu.menList,
        kidsList: state.menu.kidsList,
        itemIsHovered: state.menu.itemIsHovered,
    }
}

let mdtp = (dispatch: any) => {
    return {
    };
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, mdtp)(MenuCategories)
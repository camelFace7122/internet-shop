import React, { FC } from 'react';
import MenuCategories from './MenuCategories/MenuCategories';
import Search from './Search/Search';
import cn from 'classnames';
import MenuDropdown from './MenuCategories/MenuDropdown';
import { connect } from 'react-redux';
import {showDropdownList} from '../../redux/reducers/menu-reducer/menu-reducer';
import { MenuListItemTabsType } from '../../types/types';
import { AppStateType } from '../../redux/store';

import './Menu.css';

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {
    itemIsHovered: boolean
    tabs?: MenuListItemTabsType | null
}

type MapDispatchToPropsType = {
    showDropdownList: (itemIsHovered: boolean, dropdownTabs?: MenuListItemTabsType | null) => void
}

type OwnPropsType = {}

const Menu: FC<PropsType> = ({itemIsHovered, tabs, showDropdownList}) => {
    return (
        <div className={'menu'}>
            <div className={cn('menu__container', 'wrapper')}>
                <MenuCategories />
                <Search />
            </div>
            {itemIsHovered && <MenuDropdown tabs={tabs} showDropdownList={showDropdownList} itemIsHovered={itemIsHovered} />}
        </div>
    )
}

let mstp = (state: AppStateType) => {
    return {
        itemIsHovered: state.menu.itemIsHovered,
        tabs: state.menu.dropdownTabs,
    }   
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, {
    showDropdownList
})(Menu);
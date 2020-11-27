import React, { FC, MouseEvent } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import {showDropdownList} from '../../../redux/reducers/menu-reducer/menu-reducer';
import { MenuListItemTabsType, MenuListItemType } from '../../../types/types';
import { AppStateType } from '../../../redux/store';

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type MapStateToPropsType = {}

type MapDispatchToPropsType = {
    showDropdownList: (itemIsHovered: boolean, dropdownTabs?: MenuListItemTabsType | null) => void
}

type OwnPropsType = MenuListItemType & {
    index: number
    active: null | number
    setActive: React.Dispatch<React.SetStateAction<number | null>>
}

const MenuCategoriesItem: FC<PropsType> = ({content, link, isRed, tabs, showDropdownList, index, active, setActive}) => {

    const onHover = (e: MouseEvent) => {
        if (tabs) {
            if (!tabs[0].empty) {
                showDropdownList(true, null);     
            }
            setTimeout(() => {
                showDropdownList(true, tabs);
            })   
        }
        setActive(index);
    }
    const onLeave = (e: MouseEvent) => {
        showDropdownList(false, null); 
    }

    return (
        <>
            <a href={link} className={cn('menu__categories_item', {['item__red']: isRed}, {['active-menu-item']: index == active})}
            onMouseEnter={onHover} onMouseOut={onLeave}>{content}</a>
        </>
    )
}

let mstp = (state: AppStateType) => {
    return {
    }   
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mstp, {
    showDropdownList
})(MenuCategoriesItem);
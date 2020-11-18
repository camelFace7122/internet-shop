import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import {showDropdownList} from './../../../redux/reducers/menu-reducer/menu-reducer';

const MenuCategoriesItem = ({content, link, isRed, tabs, showDropdownList, index, active, setActive, itemIsHovered}) => {

    const onHover = (e) => {
        if (!itemIsHovered) {
            if (!tabs[0].empty) {
                showDropdownList(true, null);     
            }
            setTimeout(() => {
                showDropdownList(true, tabs);
            })   
        }
        setActive(index);
    }
    const onLeave = (e) => {
        showDropdownList(false, null); 
    }

    return (
        <>
            <a href={link} className={cn('menu__categories_item', {['item__red']: isRed}, {['active-menu-item']: index == active})}
            onMouseEnter={onHover} onMouseOut={onLeave}>{content}</a>
        </>
    )
}

let mstp = (state) => {
    return {
    }   
}

export default connect(mstp, {
    showDropdownList
})(MenuCategoriesItem);
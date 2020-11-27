import React from 'react';
import MenuCategories from './MenuCategories/MenuCategories';
import Search from './Search/Search';
import cn from 'classnames';
import MenuDropdown from './MenuCategories/MenuDropdown';
import { connect } from 'react-redux';
import {showDropdownList} from './../../redux/reducers/menu-reducer/menu-reducer';

import './Menu.css';

const Menu = ({itemIsHovered, tabs, showDropdownList}) => {
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

let mstp = (state) => {
    return {
        itemIsHovered: state.menu.itemIsHovered,
        tabs: state.menu.dropdownTabs,
    }   
}

export default connect(mstp, {
    showDropdownList
})(Menu);
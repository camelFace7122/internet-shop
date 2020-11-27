import initialState, { InitialStateType } from './menu-state';

import { SHOW_DROPDOWN_LIST } from '../../../types/constants';
import { ReactNode } from 'react';
import { MenuListItemTabsType } from '../../../types/types';

const menuReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case SHOW_DROPDOWN_LIST:
            return {
                ...state,
                ...action.payload,
            }
        default: 
            return state;
    }
}

// showDropdownList with types

type ShowDropdownListActionType = {
    type: typeof SHOW_DROPDOWN_LIST
    payload: ShowDropdownListActionPayloadType
}

type ShowDropdownListActionPayloadType = {
    itemIsHovered: boolean,
    dropdownTabs: MenuListItemTabsType | null
}

export const showDropdownList = (itemIsHovered: boolean, dropdownTabs: MenuListItemTabsType | null): ShowDropdownListActionType => {
    return {
        type: SHOW_DROPDOWN_LIST,
        payload: {
            itemIsHovered,
            dropdownTabs
        },
    }
}


export default menuReducer;

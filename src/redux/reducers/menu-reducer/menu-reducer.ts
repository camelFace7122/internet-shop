import initialState, { InitialStateType } from './menu-state';
import { SHOW_DROPDOWN_LIST } from '../../../types/constants';
import { MenuListItemTabsType } from '../../../types/types';
import { InferActionsTypes } from '../../store';

type ActionsTypes = InferActionsTypes<typeof actions>

const menuReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

const actions = {
    showDropdownList: (itemIsHovered: boolean, dropdownTabs?: MenuListItemTabsType | null) => {
        return {
            type: SHOW_DROPDOWN_LIST,
            payload: {
                itemIsHovered,
                dropdownTabs
            },
        }
    }
}

export const showDropdownList = actions.showDropdownList 

export default menuReducer;

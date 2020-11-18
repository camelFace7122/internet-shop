import initialState from './menu-state';

const SHOW_DROPDOWN_LIST = 'menu-reducer/SHOW_DROPDOWN_LIST';

const menuReducer = (state = initialState, action) => {
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

export const showDropdownList = (isHovered, tabs) => {
    return {
        type: SHOW_DROPDOWN_LIST,
        payload: {
            itemIsHovered: isHovered,
            dropdownTabs: tabs,
        },
    }
}


export default menuReducer;

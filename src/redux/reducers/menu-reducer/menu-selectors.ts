import { MenuListItemTabsType, MenuListType } from "../../../types/types"
import { AppStateType } from "../../store"

export const getMenuListItemIsHovered = (state: AppStateType): boolean => {
    return state.menu.itemIsHovered
}

export const getMenuDropdownTabs = (state: AppStateType): null | MenuListItemTabsType | undefined => {
    return state.menu.dropdownTabs
}

export const getMenuDropdownDelay = (state: AppStateType): null | number => {
    return state.menu.dropdownDelay
}

export const getMenuIsDropdownOpen = (state: AppStateType): boolean => {
    return state.menu.isDropdownOpen
}

export const getMenuWomenList = (state: AppStateType): MenuListType => {
    return state.menu.womenList
}

export const getMenuMenList = (state: AppStateType): MenuListType => {
    return state.menu.menList
}

export const getMenuKidsList = (state: AppStateType): MenuListType => {
    return state.menu.kidsList
}
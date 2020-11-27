import { createSelector } from "reselect";
import { AppStateType } from "../../store";

const getRegion = (state: AppStateType): string => {
    return state.header.userRegion;
}

export const getUserRegion = createSelector<AppStateType, string, string>(getRegion, userRegion => {
    let splittedUserRegion = userRegion.split('.');
    
    if (!splittedUserRegion[1]) {
        return 'г. ' + userRegion.split(',')[0];
    } else {
        return userRegion.split(',')[0];
    }
})

export const getRegionIsConfirmed = (state: AppStateType): boolean => {
    return state.header.regionIsConfirmed;
}



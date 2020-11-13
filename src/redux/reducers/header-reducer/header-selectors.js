import { createSelector } from "reselect";

const getRegion = (state) => {
    return state.header.userRegion;
}

export const getUserRegion = createSelector(getRegion, userRegion => {
    let splittedUserRegion = userRegion.split('.');
    
    if (!splittedUserRegion[1]) {
        return 'г. ' + userRegion.split(',')[0];
    } else {
        return userRegion.split(',')[0];
    }
})



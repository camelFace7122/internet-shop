import initialState, { InitialStateType } from './header-state';
import {RESET_INPUT, SET_USER_GEO_DATA, CONFIRM_USER_REGION} from './../../../types/constants';
import { GeoDataType } from '../../../types/types';
import {InferActionsTypes} from './../../store';

type ActionsTypes = InferActionsTypes<typeof actions>

const headerReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_GEO_DATA:
        case CONFIRM_USER_REGION: 
            return {
                ...state,
                ...action.payload,
            }
        default: 
            return state;
    }
}

const actions = {
    setUserGeoData: (geoData: GeoDataType) => {
        return {
            type: SET_USER_GEO_DATA,
            payload: {userRegion: geoData.location},
        } as const
    },
    confirmUserRegion: () => {
        return {
            type: CONFIRM_USER_REGION,
            payload: {regionIsConfirmed: true},
        } as const
    }
}

export const setUserGeoData = actions.setUserGeoData 
export const confirmUserRegion = actions.confirmUserRegion 

export type ResetInputActionType = {
    type: typeof RESET_INPUT
    field: string
}

export const resetInput = (field: string): ResetInputActionType => {
    return {
        type: RESET_INPUT,
        field,
    }
}

export default headerReducer;



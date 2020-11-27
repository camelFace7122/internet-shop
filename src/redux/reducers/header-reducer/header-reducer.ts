import initialState, { InitialStateType } from './header-state';

import {RESET_INPUT, SET_USER_GEO_DATA, CONFIRM_USER_REGION} from './../../../types/constants';
import { GeoDataType } from '../../../types/types';

const headerReducer = (state = initialState, action: any): InitialStateType => {
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

// setUserGeoData with types

type SetUserGeoDataActionType = {
    type: typeof SET_USER_GEO_DATA
    payload: SetGeoUserDataActionPayloadType
}

type SetGeoUserDataActionPayloadType = {
    userRegion: string
}

export const setUserGeoData = (geoData: GeoDataType): SetUserGeoDataActionType => {
    return {
        type: SET_USER_GEO_DATA,
        payload: {userRegion: geoData.location},
    }
}

// resetInput with types

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

// confirmUserRegion with types

type ConfirmUserRegionPayloadType = {
    regionIsConfirmed: boolean
}

export type ConfirmUserRegionActionType = {
    type: typeof CONFIRM_USER_REGION
    payload: ConfirmUserRegionPayloadType
}

export const confirmUserRegion = (): ConfirmUserRegionActionType => {
    return {
        type: CONFIRM_USER_REGION,
        payload: {regionIsConfirmed: true},
    }
}

export default headerReducer;



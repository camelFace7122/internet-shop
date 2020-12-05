import { GeoLocationsType } from '../../../types/types';
import {geoLocations as gL} from '../../database';

let initialState = {
    isAuthModalOpen: false,
    isRegionModalOpen: false,
    geoLocations: {...gL} as GeoLocationsType,
    isInputFocused: false as boolean | undefined,
}

export type InitialStateType = typeof initialState

export default initialState;
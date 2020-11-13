import {geoLocations, geoLocations as gL} from './../../database';

let initialState = {
    isAuthModalOpen: false,
    isRegionModalOpen: false,
    geoLocations: {...gL}, 
    isInputFocused: false,
}

export default initialState;
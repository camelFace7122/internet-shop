import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';
import {compareFieldAndStateLocationValues} from '../../../utils/validators/validators';

// redux-form value selectors
const AuthFormValueSelector = formValueSelector('auth');
const regionFormValueSelector = formValueSelector('region');
//

export const getIsAuthModalOpen = (state) => {
    return state.widgets.isAuthModalOpen;
}

export const getIsRegionModalOpen = (state) => {
    return state.widgets.isRegionModalOpen;
}

const getGeoLocationsKz = (state) => {
    return state.widgets.geoLocations.kz;
}

const getRegionFormLocationFieldValue = (state) => {
    return regionFormValueSelector(state, 'location');
}

export const getLocationsMatchesKz = createSelector(getRegionFormLocationFieldValue, getGeoLocationsKz, (locationFieldValue, geoLocationsKz) => {
    if (locationFieldValue) {
        let filtredList = geoLocationsKz.filter(item => {
            return compareFieldAndStateLocationValues(item.locationName, locationFieldValue) || 
            compareFieldAndStateLocationValues(item.locationName, locationFieldValue, true);
        });
        if (filtredList) {
            return filtredList.sort((a, b) => b.residentsFrom - a.residentsFrom).slice(0, 6);
        }
        return null;
    }
})

export const getPopularLocationsKz = createSelector(getGeoLocationsKz, geoLocationsKz => {
    let sortedKzLocations = [...geoLocationsKz].sort((a, b) => {
        return b.residentsFrom - a.residentsFrom;
    })
    return sortedKzLocations.slice(0, 5).map(item => {
        let splittedItem = item.locationName.split('.');

        if (splittedItem[1]) {
            return {...item, locationName: splittedItem[1]};
        } else {
            return {...item, locationName: splittedItem[0]};
        }
    });
})

export const getIsInputFocused = (state) => {
    return state.widgets.isInputFocused;
}
import {geoLocations as gL} from '../../redux/database';

export type ValidatorType = (value: string) => string | undefined

let onClickSavedLocation: string | null = null;

const requiredCreator = (text: string): ValidatorType => (value) => {
    if (value) return undefined;
    return text;
}

const minLengthCreator = (minLength: number): ValidatorType => (value) => {
    if (value.length >= minLength) return undefined;
    return `Пароль должен содержать не менее ${minLength} символов.`
}

export const isEmail: ValidatorType = (value) => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return undefined;
    return 'Пожалуйста, проверьте поле Электронная почта.' 
}
export const minLength6 = minLengthCreator(6); 
export const requiredEmail = requiredCreator('Пожалуйста, введите вашу электронную почту');
export const requiredPassword = requiredCreator('Пожалуйста, введите ваш пароль к учетной записи');

export const compareFieldAndStateLocationValues = (locationStateValue: string, locationFieldValue: string, locationHasPrefix = false) => {
    let locationStateValueCopy = locationHasPrefix && locationStateValue.split('. ')[1] || locationStateValue.slice();
    return (!locationHasPrefix && true || locationStateValueCopy) 
            && locationStateValueCopy.toLowerCase().startsWith(locationFieldValue.slice().toLowerCase());
}

export const haveAnyMatch: ValidatorType = (value) => {
    if (value && gL.kz.some(item => {
        return compareFieldAndStateLocationValues(item.locationName, value) || 
        compareFieldAndStateLocationValues(item.locationName, value, true);
    }) || value === onClickSavedLocation) return undefined;
    return 'Пожалуйста, выберите город из списка'
}


export const getOnClickSavedLocation = (location: string) => {
    onClickSavedLocation = location;
}


    
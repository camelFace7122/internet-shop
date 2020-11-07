import { authAPI } from '../../../api/api';
import initialState from './header-state';

const OPEN_AUTH_MODAL = 'auth/OPEN_AUTH_MODAL';

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_AUTH_MODAL: 
            return {
                ...state,
                isAuthModalOpen: action.payload.isAuthModalOpen,
            }
        default: 
            return state;
    }
}

const openAuthModal = (isOpen) => {
    return {
        type: OPEN_AUTH_MODAL,
        payload: { isAuthModalOpen: isOpen },
    }
}

export const toggleAuthModal = (isOpen) => (dispatch) => {
    if (isOpen) { 
        document.documentElement.style.overflow = "hidden";
        dispatch(openAuthModal(true));
    } else {
        document.documentElement.style.overflow = "";
        dispatch(openAuthModal(false));
    }
} 

export const authorizeByEmail = ({email, password}) => async (dispatch) => {
    let response = await authAPI.authorizeByEmail({email, password});
    console.log(response);
}

export default headerReducer;



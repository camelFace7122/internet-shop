import initialState from './widgets-state';

const OPEN_AUTH_MODAL = 'widgets/OPEN_AUTH_MODAL';
const OPEN_REGION_MODAL = 'widgets/OPEN_REGION_MODAL';
const GIVE_FOCUS_STATE_OF_INPUT = 'widgets/GIVE_FOCUS_STATE_OF_INPUT';

const widgetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_REGION_MODAL:
        case OPEN_AUTH_MODAL:
        case GIVE_FOCUS_STATE_OF_INPUT:
            return {
                ...state,
                ...action.payload
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

const openRegionModal = (isOpen) => {
    return {
        type: OPEN_REGION_MODAL,
        payload: { isRegionModalOpen: isOpen }
    }
}

export const giveFocusStateOfInput = (focusState) => {
    return {
        type: GIVE_FOCUS_STATE_OF_INPUT,
        payload: { isInputFocused: focusState},
    }
}

const toggleModal = (openModal) => (isOpen) => (dispatch) => {
    if (isOpen) {
        document.documentElement.style.overflow = "hidden";
        dispatch(openModal(true));
    } else {
        document.documentElement.style.overflow = "";
        dispatch(openModal(false));
    }
}
        
export const toggleAuthModal = toggleModal(openAuthModal);
export const toggleRegionModal = toggleModal(openRegionModal);

export default widgetsReducer;

import initialState, { InitialStateType } from './widgets-state';
import { OPEN_REGION_MODAL, OPEN_AUTH_MODAL, GIVE_FOCUS_STATE_OF_INPUT } from '../../../types/constants';

type ActionsTypes = OpenAuthModalActionType | OpenRegionModalActionType | GiveFocusStateOfInputActionType

const widgetsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

// openAuthModal with types

type OpenAuthModalActionType = {
    type: typeof OPEN_AUTH_MODAL
    payload: OpenAuthModalActionPayloadType
}

type OpenAuthModalActionPayloadType = {
    isAuthModalOpen: boolean
}

const openAuthModal = (isOpen: boolean): OpenAuthModalActionType => {
    return {
        type: OPEN_AUTH_MODAL,
        payload: { isAuthModalOpen: isOpen },
    }
}

// openRegionModal with types

type OpenRegionModalActionType = {
    type: typeof OPEN_REGION_MODAL
    payload: OpenRegionModalActionPayloadType
}

type OpenRegionModalActionPayloadType = {
    isRegionModalOpen: boolean
}

const openRegionModal = (isOpen: boolean): OpenRegionModalActionType => {
    return {
        type: OPEN_REGION_MODAL,
        payload: { isRegionModalOpen: isOpen }
    }
}

// giveFocusStateOfInput with types 

export type GiveFocusStateOfInputActionType = {
    type: typeof GIVE_FOCUS_STATE_OF_INPUT
    payload: GiveFocusStateOfInputActionPayloadType
}

type GiveFocusStateOfInputActionPayloadType = {
    isInputFocused?: boolean
}

export const giveFocusStateOfInput = (focusState?: boolean): GiveFocusStateOfInputActionType => {
    return {
        type: GIVE_FOCUS_STATE_OF_INPUT,
        payload: { isInputFocused: focusState},
    }
}

// toggleModal !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const toggleModal = (actionCreator: Function, isOpen: boolean, dispatch: any) => {
    if (isOpen) {
        document.documentElement.style.overflow = "hidden";
        dispatch(actionCreator(true));
    } else {
        document.documentElement.style.overflow = "";
        dispatch(actionCreator(false));
    }
}

export const toggleAuthModal = (isOpen: boolean) => (dispatch: any) => {
    toggleModal(openAuthModal, isOpen, dispatch)
}

export const toggleRegionModal = (isOpen: boolean) => (dispatch: any) => {
    toggleModal(openRegionModal, isOpen, dispatch)
}

export default widgetsReducer;
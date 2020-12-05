import initialState, { InitialStateType } from './widgets-state';
import { OPEN_REGION_MODAL, OPEN_AUTH_MODAL, GIVE_FOCUS_STATE_OF_INPUT } from '../../../types/constants';
import { BaseThunkType, InferActionsTypes } from '../../store';
import { Dispatch } from 'react';
import { Action } from 'redux';
import { ActionTypes, FormAction } from 'redux-form';

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>



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

const actions = {
    openAuthModal: (isOpen: boolean) => {
        return {
            type: OPEN_AUTH_MODAL,
            payload: { isAuthModalOpen: isOpen },
        }
    },
    openRegionModal: (isOpen: boolean) => {
        return {
            type: OPEN_REGION_MODAL,
            payload: { isRegionModalOpen: isOpen }
        }
    },
    giveFocusStateOfInput: (focusState?: boolean) => {
        return {
            type: GIVE_FOCUS_STATE_OF_INPUT,
            payload: { isInputFocused: focusState},
        }
    }
}

// toggleModal !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const _toggleModal = (actionCreator: Function, isOpen: boolean, dispatch: Dispatch<ActionsTypes>) => {
    if (isOpen) {
        document.documentElement.style.overflow = "hidden";
        dispatch(actionCreator(true));
    } else {
        document.documentElement.style.overflow = "";
        dispatch(actionCreator(false));
    }
}

export const toggleAuthModal = (isOpen: boolean): ThunkType | Action<ActionTypes> => (dispatch) => {
    _toggleModal(actions.openAuthModal, isOpen, dispatch)
}

export const toggleRegionModal = (isOpen: boolean): ThunkType | Action<ActionTypes> => (dispatch) => {
    _toggleModal(actions.openRegionModal, isOpen, dispatch)
}

export const giveFocusStateOfInput = actions.giveFocusStateOfInput

export default widgetsReducer;

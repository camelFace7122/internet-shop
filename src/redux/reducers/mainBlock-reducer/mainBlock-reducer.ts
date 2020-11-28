import { Action } from 'redux';
import initialState, { InitialStateType } from './mainBlock-state';

const mainBlockReducer = (state = initialState, action: Action): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default mainBlockReducer;

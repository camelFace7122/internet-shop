import { Action } from 'redux';
import initialState, { InitialStateType } from './seoMenu-state';

const seoMenuReducer = (state = initialState, action: Action): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default seoMenuReducer;

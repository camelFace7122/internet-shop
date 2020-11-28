import { Action } from 'redux';
import { InitialStateType } from '../actual-reducer/actual-state';
import initialState from './actual-state'; 

const actualReducer = (state = initialState, action: Action): InitialStateType => {
    switch(action.type) {
        default: 
            return state
    }
}

export default actualReducer;


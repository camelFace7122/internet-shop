import { InitialStateType } from '../actual-reducer/actual-state';
import initialState from './actual-state'; 

const actualReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        default: 
            return state
    }
}

export default actualReducer;


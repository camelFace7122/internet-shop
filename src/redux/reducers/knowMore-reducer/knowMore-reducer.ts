import { Action } from 'redux';
import initialState, {InitialStateType} from './knowMore-state';

const knowMoreReducer = (state = initialState, action: Action): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default knowMoreReducer;

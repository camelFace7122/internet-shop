import { Action } from 'redux';
import initialState, {InitialStateType} from './popular-state';

const popularReducer = (state = initialState, action: Action): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default popularReducer;

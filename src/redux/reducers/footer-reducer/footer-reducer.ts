import { Action } from 'redux';
import initialState, {InitialStateType} from './footer-state';

const footerReducer = (state = initialState, action: Action): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default footerReducer;

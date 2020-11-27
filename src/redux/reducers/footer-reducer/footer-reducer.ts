import initialState, {InitialStateType} from './footer-state';

const footerReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default footerReducer;

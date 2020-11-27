import initialState, { InitialStateType } from './mainBlock-state';

const mainBlockReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default mainBlockReducer;

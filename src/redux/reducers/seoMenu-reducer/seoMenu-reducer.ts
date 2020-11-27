import initialState, { InitialStateType } from './seoMenu-state';

const seoMenuReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default seoMenuReducer;

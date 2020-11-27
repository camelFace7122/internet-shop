import initialState, {InitialStateType} from './knowMore-state';

const knowMoreReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default knowMoreReducer;

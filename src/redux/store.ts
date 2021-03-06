import {createStore, combineReducers, applyMiddleware, compose, Reducer, AnyAction, Action} from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainBlockReducer from './reducers/mainBlock-reducer/mainBlock-reducer';
import menuReducer from './reducers/menu-reducer/menu-reducer';
import popularReducer from './reducers/popular-reducer/popular-reducer';
import actualReducer from './reducers/actual-reducer/actual-reducer';
import knowMoreReducer from './reducers/knowMore-reducer/knowMore-reducer';
import wideCarouselReducer from './reducers/wideCarousel-reducer/wideCarousel-reducer';
import seoMenuReducer from './reducers/seoMenu-reducer/seoMenu-reducer';
import footerReducer from './reducers/footer-reducer/footer-reducer';
import headerReducer from './reducers/header-reducer/header-reducer';
import {reducer as formReducer} from 'redux-form';
import { ThunkAction } from 'redux-thunk';

import {RESET_INPUT} from '../types/constants';
import widgetsReducer from './reducers/widgets-reducer/widgets-reducer';

const rootReducer = combineReducers({
    header: headerReducer,
    menu: menuReducer,
    mainBlock: mainBlockReducer,
    popular: popularReducer,
    actual: actualReducer,
    knowMore: knowMoreReducer,
    wideCarousel: wideCarouselReducer,
    seoMenu: seoMenuReducer,
    widgets: widgetsReducer,
    footer: footerReducer,
    form: formReducer.plugin({
        auth: (state, action) => {   // <----- 'login' is name of form given to reduxForm()
            switch (action.type) {
                case RESET_INPUT:
                    return {
                        ...state,
                        values: {
                            ...state.values,
                            [action.field]: undefined // <----- clear password value
                        },
                        fields: {   
                            ...state.fields,
                            [action.field]: undefined // <----- clear field state, too (touched, etc.)
                        }
                    }
                default:
                    return state
            }
        }
    })
})

export type AppStateType = ReturnType<typeof rootReducer>

export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never

export type GetStringKeys<T> = Extract<keyof T, string>

export type BaseThunkType<A extends Action, R = void> = ThunkAction<R, AppStateType, undefined, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
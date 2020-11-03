import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainBlockReducer from './reducers/mainBlock-reducer/mainBlock-reducer';
import menuReducer from './reducers/menu-reducer/menu-reducer';
import popularReducer from './reducers/popular-reducer/popular-reducer';
import actualReducer from './reducers/actual-reducer/actual-reducer';
import knowMoreReducer from './reducers/knowMore-reducer/knowMore-reducer';
import wideCarouselReducer from './reducers/wideCarousel-reducer/wideCarousel-reducer'


const reducers = combineReducers({
    menu: menuReducer,
    mainBlock: mainBlockReducer,
    popular: popularReducer,
    actual: actualReducer,
    knowMore: knowMoreReducer,
    wideCarousel: wideCarouselReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
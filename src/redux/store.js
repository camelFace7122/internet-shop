import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
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


const reducers = combineReducers({
    header: headerReducer,
    menu: menuReducer,
    mainBlock: mainBlockReducer,
    popular: popularReducer,
    actual: actualReducer,
    knowMore: knowMoreReducer,
    wideCarousel: wideCarouselReducer,
    seoMenu: seoMenuReducer,
    footer: footerReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
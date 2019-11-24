import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
    console.log('subscribe', store.getState())
});

export default store;
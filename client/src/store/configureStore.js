import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store creation
export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer
        }),
        // def: we use compose to apply several store enhancers in a row.
        // We need the following line to setup redux to accept functions as arguments to dispatch 
        // actions and to be able to use the devtools as well.

        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};


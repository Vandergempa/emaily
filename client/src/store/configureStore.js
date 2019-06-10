import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as reduxForm } from 'redux-form'
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import surveysReducer from '../reducers/surveysReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store creation
export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            form: reduxForm,
            surveys: surveysReducer
        }),
        // def: we use compose to apply several store enhancers in a row.
        // We need the following line to setup redux to accept functions as arguments to dispatch 
        // actions and to be able to use the devtools as well.

        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};


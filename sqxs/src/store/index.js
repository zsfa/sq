import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";

const reducers = combineReducers({
    
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;
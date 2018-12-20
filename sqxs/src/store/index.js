import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import classify from './reducers/classify'
const reducers = combineReducers({
    classify
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;
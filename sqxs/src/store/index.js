import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";

import classify from './reducers/classify'
import topReducers from './reducers/topReducers'
import bookList from './reducers/bookList'
import user from "./reducers/user"
const reducers = combineReducers({
    classify,topReducers,bookList,user
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;
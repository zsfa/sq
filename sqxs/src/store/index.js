import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import topReducers from "./reducers/topReducers"
const reducers = combineReducers({
    topReducers
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;
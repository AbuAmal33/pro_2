import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import {createLogger} from "redux-logger";
//настройка logger
const logger = createLogger({
    diff: true,
    collapsed: true
})



const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
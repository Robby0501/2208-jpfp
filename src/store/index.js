import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reduxLogger from 'redux-logger';

import campusReducer from "./reducers/CampusReducer";
import studentReducer from "./reducers/StudentReducer";
const rootReducer = combineReducers({
    campusReducer,
    studentReducer,
})


export default createStore(rootReducer, applyMiddleware(thunk, reduxLogger));
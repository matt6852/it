import {createStore, combineReducers, applyMiddleware} from "redux";
import {profileReducer} from "./redusers/profileReducer";
import {dialogReducer} from "./redusers/dialogReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

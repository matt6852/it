import {createStore, combineReducers, applyMiddleware} from "redux";
import {profileReducer} from "./redusers/profileReducer";
import {dialogReducer} from "./redusers/dialogReducer";
import {useReducer} from "react";
import {usersReducer} from "./redusers/usersReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

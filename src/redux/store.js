import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {profileReducer} from "./redusers/profileReducer";
import {dialogReducer} from "./redusers/dialogReducer";
import {useReducer} from "react";
import {usersReducer} from "./redusers/usersReducer";
import {authReducer} from "./redusers/authReducer";
import {reducer as formReducer} from 'redux-form'

import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk"
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    authMe: authReducer,
    form: formReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootSaga)



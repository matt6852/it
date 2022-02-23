import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import 'antd/dist/antd.css';
import ProfilePage from "./components/Profile";

import Dialogs from "./components/Dialogs";
import {
    BrowserRouter,
    Routes,
    Route, useNavigate, Navigate, useLocation
} from "react-router-dom";
import NewsPage from "./components/News";
import UsersPage from "./components/Users";
import Login from "./components/Login";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {authMeThunk,} from "./redux/redusers/actionCreators";
import {Spin} from "antd";
import Views from "./components/Views";

function App({authMeThunk, isFirstLoading}) {

    useEffect(() => {
        authMeThunk()
    }, [])
    if (isFirstLoading) {
        return <div style={{display: "flex", justifyContent: "center"}}>
            <Spin tip="Loading..." size={"large"} spinning={isFirstLoading}/>
        </div>
    }


    return (
        <BrowserRouter>
            <Views/>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return {
        isFirstLoading: state.authMe.isFirstLoading
    }
}


export default connect(mapStateToProps, {authMeThunk})(App);

import Header from "./Header";
import NavBar from "./Navbar";
import {Navigate, Route, Routes, useLocation, Outlet, useNavigate} from "react-router-dom";
import ProfilePage from "./Profile";
import Dialogs from "./Dialogs";
import NewsPage from "./News";
import UsersPage from "./Users";
import Login from "./Login";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";


const Views = (props) => {
    const location = useLocation()
    const navigate = useNavigate()

    const {isLoggedIn} = useSelector((state) => state.authMe)

    useEffect(() => {
        if (location.state?.from) {
            navigate(location.state.from)
        }
    }, [isLoggedIn,])
    return <div className="appWrapper">
        <Header/>
        <div className="navWrapper">
            <NavBar/>
            <div className="mainContent">
                <Routes>
                    <Route path="/"
                           element={<Login/>}
                    />
                    <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn}/>}>
                        <Route path="/profile"
                               element={<ProfilePage/>}>
                            <Route path=":id"
                                   element={<ProfilePage/>}/>
                        </Route>

                        <Route path="/dialogs"
                               element={<Dialogs/>}
                        />
                        <Route path="/news"
                               element={<NewsPage/>}
                        />
                        <Route path="/users"
                               element={<UsersPage/>}
                        />
                    </Route>
                </Routes>
            </div>
        </div>
    </div>
}

const ProtectedRoutes = ({isLoggedIn}) => {
    const location = useLocation()
    return isLoggedIn ? <Outlet/> : <Navigate to="/" replace state={{from: location}}/>
}

export default Views
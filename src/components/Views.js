import Header from "./Header";
import NavBar from "./Navbar";
import {Navigate, Route, Routes, useLocation, Outlet, useNavigate} from "react-router-dom";
import NewsPage from "./News";
import Login from "./Login";
import React, {useEffect, Suspense} from "react";
import {useSelector} from "react-redux";

const ProfilePage = React.lazy(() => import('./Profile'));
const Dialogs = React.lazy(() => import('./Dialogs'));
const UsersPage = React.lazy(() => import('./Users'));

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
                               element={
                                   <Suspense fallback={<div>Загрузка...</div>}>
                                       <ProfilePage/>
                                   </Suspense>

                               }>
                            <Route path=":id"
                                   element={
                                       <Suspense fallback={<div>Загрузка...</div>}>
                                           <ProfilePage/>
                                       </Suspense>

                                   }/>
                        </Route>

                        <Route path="/dialogs"
                               element={<Suspense fallback={<div>Загрузка...</div>}>
                                   <Dialogs/>
                               </Suspense>}
                        />
                        <Route path="/news"
                               element={<NewsPage/>}
                        />
                        <Route path="/users"
                               element={<Suspense fallback={<div>Загрузка...</div>}>
                                   <UsersPage/>
                               </Suspense>}
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
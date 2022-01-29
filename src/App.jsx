import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import 'antd/dist/antd.css';
import ProfilePage from "./components/Profile";

import Dialogs from "./components/Dialogs";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import NewsPage from "./components/News";
import UsersPage from "./components/Users";

function App(props) {

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <div className="navWrapper">
                    <NavBar/>
                    <div className="mainContent">
                        <Routes>
                            <Route path="/profile/"
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
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

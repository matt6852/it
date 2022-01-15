import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/Navbar";

import ProfilePage from "./components/Profile";

import Dialogs from "./components/Dialogs";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App(props) {

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <div className="navWrapper">
                    <NavBar/>
                    <div className="mainContent">
                        <Routes>
                            <Route exact={true} path="/profile"
                                   element={<ProfilePage


                                   />}
                            />
                            <Route path="/dialogs"
                                   element={<Dialogs
                                   />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

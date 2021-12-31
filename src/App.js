import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import ImgBg from "./components/Imgbagraund";
import ProfilePage from "./components/Profile";
import PostsPage from "./components/PostsPage";
import Dialogs from "./components/Dialogs";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <div className="navWrapper">
                    <NavBar/>
                    <div className="mainContent">
                        <Routes>
                            <Route path="/profile" element={<ProfilePage/>}/>
                            <Route path="/dialogs" element={<Dialogs/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

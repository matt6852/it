import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import ImgBg from "./components/Imgbagraund";
import ProfilePage from "./components/Profile";
import PostsPage from "./components/PostsPage";

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <div className="navWrapper">
        <NavBar />
        <div className="mainContent">
          <ImgBg />
          <ProfilePage />
          <PostsPage />
        </div>
      </div>
    </div>
  );
}

export default App;

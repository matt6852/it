import ava from "../../assets/profileAva.png";
import PostsPage from "../PostsPage";
import ImgBg from "../Imgbagraund";
const ProfilePage = () => {
  return (
    <div>
        <ImgBg/>
      <div>
        <img src={ava} alt="" />
      </div>
      <div>
        <p> profile info </p>
      </div>
      <PostsPage />
    </div>
  );
};

export default ProfilePage;

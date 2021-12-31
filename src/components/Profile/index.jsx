import ava from "../../assets/profileAva.png";
import PostsPage from "../PostsPage";
const ProfilePage = () => {
  return (
    <div>
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

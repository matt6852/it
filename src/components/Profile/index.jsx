import ava from "../../assets/profileAva.png";
import PostsPage from "../PostsPage";
import ImgBg from "./Imgbagraund";
import ProfileInfo from "./ProfileInfo";

const ProfilePage = (props) => {


    return (
        <>
            <ProfileInfo/>
            <PostsPage postsData={props.state.postsData}/>
        </>

    );
};

export default ProfilePage;

import ava from "../../assets/profileAva.png";
import PostsPage from "../PostsPage";
import ImgBg from "./Imgbagraund";
import ProfileInfo from "./ProfileInfo";

const ProfilePage = (props) => {


    return (
        <>
            <ProfileInfo/>
            <PostsPage textAreaValue={props.textAreaValue} postsData={props.state.postsData}
                       dispatch={props.dispatch}/>
        </>

    );
};

export default ProfilePage;

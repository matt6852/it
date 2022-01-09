import ava from "../../assets/profileAva.png";
import PostsPage from "../PostsPage";
import ImgBg from "./Imgbagraund";
import ProfileInfo from "./ProfileInfo";

const ProfilePage = (props) => {


    return (
        <>
            <ProfileInfo/>
            <PostsPage textAreaValue={props.state.textAreaValue} postsData={props.state.postsData}
                       addPost={props.addPost} handleInput={props.handleInput}/>
        </>

    );
};

export default ProfilePage;

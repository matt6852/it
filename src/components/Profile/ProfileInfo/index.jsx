import ImgBg from "../Imgbagraund";
import ava from "../../../assets/profileAva.png";
import {useParams} from "react-router-dom";
import {useEffect, useRef} from "react";

import {connect} from "react-redux";
import {
    getUserStatusThunk, sendUserPhoto,
    setProfileThunk, setUserStatusThunk
} from "../../../redux/redusers/actionCreators";

import withAuthRedirect from "../../../hok/withAuthRedirect";
import UserStatus from "../Status";


const ProfileInfo = (props) => {

    const {id} = useParams()

    let userId = id ? id : (props.currentUserId || props.userID)
    const isOwner = props.currentUserId === props.userID

    console.log(props.currentUserId, "currentUserId", props.userID, " props.userID")
    const fetchProfile = () => {
        props.setProfileThunk(+userId)
        props.getUserStatusThunk(+userId || props.userID)

    }
    const ref = useRef();

    const reset = () => {
        ref.current.value = "";
    };
    const sendUserImage = (e) => {

        const file = e.target.files[0]
        console.log(file)
        if (file) {
            props.sendUserPhoto(file)
            reset()
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [id])

    return (
        <>
            <div>
                {/*<ImgBg/>*/}
                <div>
                    <img src={props.profile?.photos?.small || ava} alt="mylogo"/>
                </div>
                <div>
                    <h2> {props.profile?.fullName || props.loginName} </h2>
                    <ul>
                        <li>{props.profile?.lookingForAJob ? "в поиске работы" : "уже работаю"}</li>
                        {/*<li>{props.profile?.lookingForAJobDescription }</li>*/}
                    </ul>
                    <h3>
                        {props.profile?.aboutMe}
                    </h3>
                    <UserStatus/>
                    {isOwner ? <input onChange={sendUserImage} ref={ref} type={"file"}/> : null}
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        error: state.usersPage.error,
        loading: state.usersPage.isLoading,
        profile: state.profilePage.profile,
        currentUserId: state.authMe.id,
        loginName: state.authMe.login,
        isLoggedIn: state.authMe.isLoggedIn,
        userID: state.profilePage.profile?.userId
    }
}


export default withAuthRedirect(connect(mapStateToProps, {
    setProfileThunk, getUserStatusThunk, sendUserPhoto
})(ProfileInfo))
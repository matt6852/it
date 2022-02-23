import ImgBg from "../Imgbagraund";
import ava from "../../../assets/profileAva.png";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {connect} from "react-redux";
import {
    getUserStatusThunk,
    setProfileThunk, setUserStatusThunk
} from "../../../redux/redusers/actionCreators";

import withAuthRedirect from "../../../hok/withAuthRedirect";
import UserStatus from "../Status";


const ProfileInfo = (props) => {

    const {id} = useParams()

    let userId = id ? id : (props.currentUserId || props.userID)


    const fetchProfile = () => {
        props.setProfileThunk(+userId)
        props.getUserStatusThunk(+userId || props.userID)

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
        userID: state.app.userID
    }
}


export default withAuthRedirect(connect(mapStateToProps, {
    setProfileThunk, getUserStatusThunk,
})(ProfileInfo))
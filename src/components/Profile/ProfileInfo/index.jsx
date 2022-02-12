import ImgBg from "../Imgbagraund";
import ava from "../../../assets/profileAva.png";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {
    getUserStatus,
    setProfileThunk
} from "../../../redux/redusers/actionCreators";
import {samuraiAPI} from "../../../dal/api";
import withAuthRedirect from "../../../hok/withAuthRedirect";
import UserStatus from "../Status";
// import {useNavigate} from "react-router-dom";

const ProfileInfo = (props) => {
    // const navigate = useNavigate();
    const {id} = useParams()
    // console.log(+props.currentUserId)
    let userId = id ? id : props.currentUserId


    const fetchProfile = () => {
        props.setProfileThunk(+userId)
        props.getUserStatus(+userId || 22044)

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
        isLoggedIn: state.authMe.isLoggedIn
    }
}


export default withAuthRedirect(connect(mapStateToProps, {
    setProfileThunk, getUserStatus
})(ProfileInfo))
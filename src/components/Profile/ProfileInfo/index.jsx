import ImgBg from "../Imgbagraund";
import ava from "../../../assets/profileAva.png";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {getError, isLoading, loadUsers, setPage, setProfile} from "../../../redux/redusers/actionCreators";
import {samuraiAPI} from "../../../dal/api";

const ProfileInfo = (props) => {
    const {id} = useParams()
    console.log(+props.currentUserId)
    let userId = id ? id : props.currentUserId


    const fetchProfile = () => {
        props.isLoading(true)

        samuraiAPI.getProfile(+userId)
            .then((res) => {
                props.setProfile(res.data)
                props.isLoading(false)
            }).catch(error => {
            props.getError(error)
            props.isLoading(false)
        })
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
                        <li>{props.profile?.lookingForAJobDescription}</li>
                    </ul>
                    <h3>
                        {props.profile?.aboutMe}
                    </h3>
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
        loginName: state.authMe.login
    }
}
export default connect(mapStateToProps, {
    loadUsers,
    setPage,
    getError,
    isLoading,
    setProfile

})(ProfileInfo)
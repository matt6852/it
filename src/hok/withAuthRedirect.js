import {useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {useNavigate, Redirect} from "react-router-dom";


const withAuthRedirect = (Component) => {

    return (props) => {
        const {isLoggedIn} = useSelector((state) => state.authMe)
        const {loggedIn} = useSelector((state) => state.app)
        const navigate = useNavigate();
        // useEffect(() => {
        //     if (!isLoggedIn) {
        //
        //         return navigate("/login")
        //     }
        // })
        return <Component {...props}/>
    }
}


export default withAuthRedirect
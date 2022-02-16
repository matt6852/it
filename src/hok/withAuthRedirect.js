import {useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {useNavigate, Redirect} from "react-router-dom";


const withAuthRedirect = (Component) => {

    return (props) => {
        const {isLoggedIn} = useSelector((state) => state.authMe)
        const navigate = useNavigate();
        useEffect(() => {
            if (false) {
                // console.log(isLoggedIn)
                return navigate("/login")
            }
        })
        return <Component {...props}/>
    }
}


export default withAuthRedirect
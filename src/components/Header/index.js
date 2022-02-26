import logo from "../../assets/logo.jpg";
import style from "./style.module.css";
import {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {authMeThunk, login, logOutThunk,} from "../../redux/redusers/actionCreators";
import {samuraiAPI} from "../../dal/api";
import {useLocation, useNavigate} from "react-router-dom";


const Header = ({isLoggedIn, authMeThunk, id, logOutThunk, login}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const goBack = () => {
        authMeThunk()
        if (location.state?.from) {
            navigate(location.state.from)
        }
    }
    return (
        <header className={style.header}>
            <img src={logo} alt="logo" className={style.image}/>
            <div>
                {isLoggedIn ? <button onClick={() => logOutThunk()}>logOut</button> :
                    <button onClick={goBack}>logIn</button>}
            </div>
        </header>
    );
};
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authMe.isLoggedIn,
        id: state.authMe.id
    }
}


export default connect(mapStateToProps, {
    authMeThunk, logOutThunk
})(Header);

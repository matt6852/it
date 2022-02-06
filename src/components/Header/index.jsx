import logo from "../../assets/logo.jpg";
import style from "./style.module.css";
import {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {authMeThunk, setMe} from "../../redux/redusers/actionCreators";
import {samuraiAPI} from "../../dal/api";


const Header = ({isLoggedIn, authMeThunk}) => {

    useEffect(() => {
        authMeThunk()
    }, [])
    return (
        <header className={style.header}>
            <img src={logo} alt="logo" className={style.image}/>
            <div>
                {isLoggedIn ? <button>logOut</button> : <button>logIn</button>}
            </div>
        </header>
    );
};
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authMe.isLoggedIn
    }
}


export default connect(mapStateToProps, {
    authMeThunk,
})(Header);

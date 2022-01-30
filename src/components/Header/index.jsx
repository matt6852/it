import logo from "../../assets/logo.jpg";
import style from "./style.module.css";
import {useEffect} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setMe} from "../../redux/redusers/actionCreators";


const Header = ({setMe, isLoggedIn}) => {

    const authMe = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0//auth/me", {
            withCredentials: true
        }).then(({data: {data}}) => {
                setMe(data)
            }
            // console.log(data)
        )
    }
    useEffect(() => {
        authMe()
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


export default connect(mapStateToProps, {setMe})(Header);

import style from "./style.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <NavLink className={({isActive}) => isActive ? style.active : style.unactive}
                     to="/profile">Profile</NavLink>
            <NavLink className={({isActive}) => isActive ? style.active : style.unactive}
                     to="/dialogs">Dialogs</NavLink>
            <NavLink className={({isActive}) => isActive ? style.active : style.unactive}
                     to="/messages">Message</NavLink>
            <NavLink className={({isActive}) => isActive ? style.active : style.unactive} to="/news">News</NavLink>
            <NavLink className={({isActive}) => isActive ? style.active : style.unactive} to="/music">Music</NavLink>
            <NavLink className={({isActive}) => isActive ? style.active : style.unactive}
                     to="/settings">Settings</NavLink>
        </nav>
    );
};

export default NavBar;

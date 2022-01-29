import style from "./style.module.css";
import {NavLink, useParams, Outlet} from "react-router-dom";

const NavBar = () => {

    const activeLink = (active) => {

        return active ? style.active : style.unactive
    }

    const profile = `/profile/${22044}`
    return (
        <nav className={style.nav}>
            <NavLink className={({isActive}) => activeLink(isActive)}
                     to={profile}>Profile</NavLink>
            <NavLink className={({isActive}) => activeLink(isActive)}
                     to="/dialogs">Dialogs</NavLink>
            {/*<NavLink className={({isActive}) => activeLink(isActive)} to="/news">News</NavLink>*/}
            <NavLink className={({isActive}) => activeLink(isActive)} to="/users">Users</NavLink>
            <NavLink className={({isActive}) => activeLink(isActive)} to="/music">Music</NavLink>
            <NavLink className={({isActive}) => activeLink(isActive)}
                     to="/settings">Settings</NavLink>
            <Outlet/>
        </nav>
    );
};

export default NavBar;

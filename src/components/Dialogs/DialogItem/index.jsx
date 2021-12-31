import {NavLink} from "react-router-dom";
import style from "../style.module.css";

const DialogItem = (props) => {

    const path = `/dialogs/${props.id}`
    const activeLink = (active) => {
        return active ? style.active : style.unactive
    }
    return <div>
        <p>
            <NavLink className={({isActive}) => activeLink(isActive)} to={path}>{props.name}</NavLink>
        </p>
    </div>
}
export default DialogItem
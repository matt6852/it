import style from "./style.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";


const Dialogs = () => {

    return (
        <div className={style.mainContainer}>
            <div className={style.dialogItems}>
                <DialogItem id="1" name="Dimych"/>
                <DialogItem id="2" name="Valera"/>
                <DialogItem id="3" name="Sasha"/>
            </div>
            <div className={style.messages}>
                <MessageItem content="hi"/>
                <MessageItem content="hello"/>
                <MessageItem content="yoooou"/>
            </div>
        </div>

    )
}
export default Dialogs
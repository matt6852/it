import style from "./style.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";


const Dialogs = () => {
    const dialogsData = [
        {
            id: "1", name: "Dimych"
        }, {
            id: "2", name: "Sveta"
        }, {
            id: "3", name: "Andrey"
        }
        , {
            id: "4", name: "Victor"
        }
    ]
    const messageData = [
        {
            id: "1", message: "hi"
        }, {
            id: "2", message: "hello"
        }, {
            id: "3", message: "yooooooo"
        }

    ]

    const renderDialogItems = dialogsData.map((item) => {
        return <DialogItem key={item.id} id={item.id} name={item.name}/>
    })
    const renderMessageItems = messageData.map((item) => {
        return <MessageItem key={item.id} id={item.id} content={item.message}/>
    })

    return (
        <div className={style.mainContainer}>
            <div className={style.dialogItems}>
                {renderDialogItems}
            </div>
            <div className={style.messages}>
                {renderMessageItems}
            </div>
        </div>

    )
}
export default Dialogs
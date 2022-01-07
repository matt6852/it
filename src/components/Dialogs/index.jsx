import style from "./style.module.css"
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";


const Dialogs = (props) => {


    const renderDialogItems = props.state.dialogsData.map((item) => {
        return <DialogItem key={item.id} id={item.id} name={item.name}/>
    })
    const renderMessageItems = props.state.messageData.map((item) => {
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
import style from "./style.module.css"
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import {addMessageAction, addMessageValueHandlerAction} from "../../redux/redusers/actionCreators";
import {connect} from "react-redux";


const Dialogs = ({handelTextDialogValueDispatch, addNewMessageDispatch, ...props}) => {
    const {dialogTextAreaValue, dialogsData, messageData,} = props.dialogPage
    const onInputChange = (e) => {
        const value = e.target.value
        handelTextDialogValueDispatch(value)
    }
    const addMessage = () => {
        if (dialogTextAreaValue) {
            addNewMessageDispatch(dialogTextAreaValue)
        }
    }
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
            <div>
                <textarea onChange={onInputChange} value={dialogTextAreaValue}/>
                <div>
                    <button onClick={addMessage}>
                        добавить сообщение
                    </button>
                </div>

            </div>
        </div>

    )

}
const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }

}


const mapDispatchToProps = (dispatch) => {
    return {

        handelTextDialogValueDispatch: (value) => dispatch(
            addMessageValueHandlerAction(value)),
        addNewMessageDispatch: (value) => dispatch(addMessageAction(value))


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)
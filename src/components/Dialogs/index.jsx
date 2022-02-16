import style from "./style.module.css"
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import {addMessageAction, addMessageValueHandlerAction} from "../../redux/redusers/actionCreators";
import {connect} from "react-redux";
import withAuthRedirect from "../../hok/withAuthRedirect";
import {Field, reduxForm} from 'redux-form'


const Dialogs = ({handelTextDialogValueDispatch, addMessageAction, ...props}) => {
    const {dialogTextAreaValue, dialogsData, messageData,} = props.dialogPage
    const onInputChange = (values) => {
        addMessageAction(values.dialogTextArea)
        values.dialogTextArea = ""
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

                <TextAreaRedux onSubmit={onInputChange}/>

            </div>
        </div>

    )

}
const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }

}


const TextArea = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={"textarea"} name={"dialogTextArea"}/>
        <div>
            <button>Отправить</button>
        </div>

    </form>
}

const TextAreaRedux = reduxForm({form: 'DialogTextArea'})(TextArea)


export default withAuthRedirect(connect(mapStateToProps, {addMessageAction})(Dialogs))
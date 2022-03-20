import Post from "./Post";
import style from "./style.module.css"
import {addPostAction, addPostValueHandlerAction} from "../../redux/redusers/actionCreators";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {Field, reduxForm} from "redux-form";


function PostsPage({addPostAction, ...props},) {
    const {postsData, textAreaValue,} = props.profilePageState
    const renderPosts = postsData.map(item => <Post key={item.id} message={item.message}
                                                    likeCount={item.likeCount}/>)

    const handleInput = (values) => {
        console.log(values.profileTextArea)
        addPostAction(values.profileTextArea)
        values.profileTextArea = ""
    }


    return (
        <div>
            <div className={style.container}>
                <TextAreaRedux onSubmit={handleInput}/>
            </div>
            {renderPosts}
        </div>
    );
}

mapStateToProps = (state) => {
    return {
        profilePageState: state.profilePage
    }
}
mapDispatchToProps = (dispatch) => {
    return {
        handleInputDispatch: (value) => dispatch(addPostValueHandlerAction(value)),
        // addPostDispatch: (value) => dispatch(addPostAction(value))
    }
}

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) => (
    <div>
        <label>{label}</label>
        <div>
            <textarea style={{border: touched ? "solid red 3px" : "solid red 3px black"}} {...input} placeholder={label}
                      type={type}/>
            {touched && error &&
                <div>{error}</div> ||
                (warning && <span>{warning}</span>)}
        </div>
    </div>
)
const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const TextArea = (props) => {
    // console.log(props)
    return <form onSubmit={props.handleSubmit}>
        <Field component={renderField} name={"profileTextArea"} validate={[required, maxLength15,]}/>
        <div>
            <button>Отправить</button>
        </div>


    </form>
}

const TextAreaRedux = reduxForm({form: 'DialogTextArea'})(TextArea)

export default connect(mapStateToProps, {addPostAction})(PostsPage);

import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux";
// import {logMein} from "../../redux/redusers/actionCreators";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {logMein} from "../../redux/redusers/actionCreators";


const Login = ({isLoggedIn, logMein, handleSubmit}) => {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (isLoggedIn) {
    //         return navigate("/profile")
    //     }
    // }, [isLoggedIn])

    // console.log(props.logMein)
    const test = (values) => {

        logMein(values)


    }


    return <div>Login page

        <form onSubmit={handleSubmit(test)} style={{display: "flex", flexDirection: "column", padding: "50px"}}>
            <h3 style={{margin: "10px", alignSelf: "center"}}>Заполнте форму</h3>
            <Field style={{margin: "10px"}}
                   name="email"
                   component="input"
                   type="text"
                   placeholder="email"
            />
            <Field style={{margin: "10px"}}
                   name="password"
                   component="input"
                   type="text"
                   placeholder="password"
            />

            <button style={{margin: "10px"}}>отправить< /button>
        </form>

    </div>
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.app.loggedIn,
        id: state.authMe.id,
        isLoggedIn: state.authMe.isLoggedIn,
    }
}
export default connect(mapStateToProps, {logMein})(reduxForm({
    // a unique name for the form
    form: 'login'
})(Login))
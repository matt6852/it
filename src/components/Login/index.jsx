import {Field, reduxForm} from 'redux-form'

const Login = (props) => {
    console.log(props)
    const test = (form) => {
        // props.touch(form)
        console.log(props.touch(form.name))


    }


    return <div>Login page

        <form onSubmit={props.handleSubmit(test)} style={{display: "flex", flexDirection: "column", padding: "50px"}}>
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
export default reduxForm({
    // a unique name for the form
    form: 'login'
})(Login)
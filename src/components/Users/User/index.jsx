import {connect} from "react-redux";


const User = (props) => {
    return <div style={{backgroundColor: "gray", marginTop: "30px", padding: "10px"}}>
        <img src={props.avatar}/>
        <h3>{props.first_name} {props.last_name} </h3>
        <p>
            email : {props.email}
        </p>

    </div>

}
const mapDispatchToProps = (dispatch) => {
    return {}
}
const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
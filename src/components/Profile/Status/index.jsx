import {connect} from "react-redux";
import {useState} from "react";
import {setStatus, setUserStatus} from "../../../redux/redusers/actionCreators";
import {useParams} from "react-router-dom";


const UserStatus = ({status, setUserStatus, currId, userId}) => {


    const [isEdit, setIsEdit] = useState(false)
    const [textStatus, setTextStatus] = useState(status)

    const setNewStatus = () => {

        setUserStatus(textStatus)

        setIsEdit(false)
    }
    const onInputChange = (e) => {
        const inputValue = e.target.value

        setTextStatus(inputValue)
    }
    const onHandleStatusEdit = () => {
        let check = currId ? currId : 22044
        if (userId !== check) {
            setIsEdit(false)
        } else {
            setIsEdit(true)
        }
    }


    return <div style={{margin: "15px"}}>
        {isEdit ? <input autoFocus onBlur={setNewStatus} onChange={(e) => onInputChange(e)} value={textStatus}/> :
            <span onClick={onHandleStatusEdit}>{status ? status : "set status"}</span>}
    </div>
}

const mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
        userId: state.authMe.id,
        currId: state.profilePage.profile?.userId

    }

}


export default connect(mapStateToProps, {setStatus, setUserStatus})(UserStatus)

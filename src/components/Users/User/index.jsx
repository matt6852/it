import {connect} from "react-redux";
import axios from "axios";
import {followedUser, getError, unfollowedUser} from "../../../redux/redusers/actionCreators";


const User = (props) => {

    const {user} = props

    const fetchUsers = (user, followed = true) => {
        const users = axios.put(`https://reqres.in/api/users/${user.id}`, {
            ...user, followed: followed ? true : false
        })
            .then((res) => {
                followed ? props.followed(followedUser(res.data)) : props.unfollowed(unfollowedUser(res.data))

            }).catch(error => {
                props.setError(error)
            })
    }

    const addToFriends = (user) => {

        fetchUsers(user)
    }
    const removeFriend = (user) => {
        // console.log(id)
        fetchUsers(user, false)
    }


    return <div style={{backgroundColor: "gray", marginTop: "30px", padding: "10px"}}>
        <img src={user.avatar}/>
        <h3>{user.first_name} {user.last_name} </h3>
        <p>
            email : {user.email}
        </p>
        {user.followed ? <button onClick={() => removeFriend(user)}>Удалить из Друзей</button> :
            <button onClick={() => addToFriends(user)}>Добавить в друзья</button>}

    </div>

}
const mapDispatchToProps = (dispatch) => {
    return {
        followed: (user) => dispatch(followedUser(user)),
        unfollowed: (user) => dispatch(unfollowedUser(user)),
        setError: (error) => dispatch(getError(error))
    }
}
const mapStateToProps = (state) => {
    return {
        test: state.usersPage.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
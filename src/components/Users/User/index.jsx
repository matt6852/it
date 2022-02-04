import {connect} from "react-redux";
import axios from "axios";
import {

    followOrUnfollow,
    getError,
    isLoading,
    loadUsers,

} from "../../../redux/redusers/actionCreators";
import {Link} from "react-router-dom";
import {samuraiAPI} from "../../../dal/api";


const User = (props) => {
    // console.log(props)
    const fetchAllUsers = (page, count) => {
        props.isLoading(true)
        samuraiAPI.getUsers(page, count)
            .then((res) => {
                props.loadUsers(res.data)
                props.isLoading(false)
            }).catch(error => {
            props.getError(error)
            props.isLoading(false)
        })
    }

    const {user, pages} = props


    const followOrUnFollowCurrentUser = (id, method) => {
        if (method === "post") {
            props.isLoading(true)
            samuraiAPI.followAUser(id)
                .then((res) => {
                    if (res.data.resultCode !== 1) {
                        fetchAllUsers(props.currentPage, props.perPage)
                    }
                }).catch(error => {
                props.getError(error)
                props.isLoading(false)
            })
        }
        if (method === "delete") {
            props.isLoading(true)
            samuraiAPI.unFollowAUser(id)
                .then((res) => {
                    if (res.data.resultCode !== 1) {
                        fetchAllUsers(props.currentPage, props.perPage)
                    }
                }).catch(error => {
                props.getError(error)
                props.isLoading(false)
            })
        }
    }
    const isButtonDisable = () => props.followOrUnFollowUsers.some((f) => f.id === user.id) && props.loading

    const addToFriends = (id) => {
        props.followOrUnfollow(id)
        followOrUnFollowCurrentUser(id, "post")
    }

    const removeFriend = (id) => {
        props.followOrUnfollow(id)
        followOrUnFollowCurrentUser(id, "delete")
    }

    return <div style={{backgroundColor: "gray", marginTop: "30px", padding: "10px"}}>
        <img src={user.photos.small}/>
        <Link to={`/profile/${user.id}`}>
            <h3>{user.name} {user.status} </h3>
        </Link>

        <p>
            {user.status}
        </p>
        {user.followed ?
            <button disabled={isButtonDisable()}
                    onClick={() => {
                        removeFriend(user.id)
                    }}>Удалить из Друзей</button> :
            <button disabled={isButtonDisable()}
                    onClick={() => {
                        addToFriends(user.id)
                    }}>Добавить в друзья</button>}

    </div>

}

const mapStateToProps = (state) => {
    return {

        perPage: state.usersPage.perPage,
        pages: state.usersPage.pages,
        currentPage: state.usersPage.page,
        loading: state.usersPage.isLoading,
        users: state.usersPage.users,
        followOrUnFollowUsers: state.usersPage.toggleFriends
    }
}

export default connect(mapStateToProps, {
    getError,
    loadUsers,
    isLoading,
    followOrUnfollow

})(User)
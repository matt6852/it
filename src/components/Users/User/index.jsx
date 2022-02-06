import {connect} from "react-redux";

import {
    followOrUnFollowThunk,
} from "../../../redux/redusers/actionCreators";
import {Link} from "react-router-dom";


const User = (props) => {


    const {user} = props


    const isButtonDisable = () => props.followOrUnFollowUsers.some((f) => f.id === user.id) && props.loading

    const addToFriends = (id) => {
        props.followOrUnFollowThunk(id, "post", props.currentPage, props.perPage)

    }

    const removeFriend = (id) => {
        props.followOrUnFollowThunk(id, "delete", props.currentPage, props.perPage)
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
    followOrUnFollowThunk
})(User)
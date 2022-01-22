import {connect} from "react-redux";
import {followUserAction, unfollowUserAction} from "../../../redux/redusers/actionCreators";

const sum = 35
const arr = [1, 2, 4]
console.log(sum / arr.length)

if (sum > 2) {
    console.log(2)
} else if (sum < 1) {
    console.log(1)
} else if (sum === 0) {
    console.log(0)
} else if (sum === 100) {
    console.log(100)
} else {
    console.log("thee is no sum")
}

const User = (props) => {
    console.log(props)
    const makeFriend = (id) => {
        props.addLikeAFriend(id)
    }
    const looseFriend = (id) => {
        props.deleteAFriend(id)
    }
    return <div>
        <h3>{props.fullName}</h3>
        <div>
            <button onClick={() => makeFriend(props.id)} disabled={props.followed}>Стать другом</button>
            <button onClick={() => looseFriend(props.id)} disabled={!props.followed}>Убрать из друзей</button>
        </div>
    </div>

}
const mapDispatchToProps = (dispatch) => {
    return {
        addLikeAFriend: (id) => dispatch(followUserAction(id)),
        deleteAFriend: (id) => dispatch(unfollowUserAction(id))
    }
}
const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
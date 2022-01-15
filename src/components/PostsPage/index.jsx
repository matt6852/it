import Post from "./Post";
import style from "./style.module.css"
import {addPostAction, addPostValueHandlerAction} from "../../redux/redusers/actionCreators";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


function PostsPage({addPostDispatch, handleInputDispatch, ...props},) {
    const {postsData, textAreaValue,} = props.profilePage
    const renderPosts = postsData.map(item => <Post key={item.id} message={item.message}
                                                    likeCount={item.likeCount}/>)

    const handleInput = (e) => {
        const value = e.target.value
        handleInputDispatch(value)

    }
    const addPost = () => {
        if (textAreaValue) {
            addPostDispatch(textAreaValue)
        }

    }


    return (
        <div>
            <div className={style.container}>
                <textarea value={textAreaValue} onChange={handleInput}/>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>

            </div>
            {renderPosts}

        </div>
    );
}

mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }

}
mapDispatchToProps = (dispatch) => {
    return {
        handleInputDispatch: (value) => dispatch(addPostValueHandlerAction(value)),
        addPostDispatch: (value) => dispatch(addPostAction(value))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);

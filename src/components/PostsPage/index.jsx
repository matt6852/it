import React, {useRef} from "react";
import Post from "./Post";
import style from "./style.module.css"
import {addPostAction} from "../../redux/state";
import {addPostValueHandlerAction} from "../../redux/state";

function PostsPage(props) {
    const renderPosts = props.postsData.map(item => <Post key={item.id} message={item.message}
                                                          likeCount={item.likeCount}/>)

    const handleInput = (e) => {
        const value = e.target.value
        props.dispatch(addPostValueHandlerAction(value))
    }
    const addPost = () => {

        if (props.textAreaValue) {
            props.dispatch(addPostAction(props.textAreaValue))
        }
        // props.addPost(textAreaValue)
    }


    return (
        <div>
            <div className={style.container}>
                <textarea value={props.textAreaValue} onChange={handleInput}/>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>

            </div>
            {renderPosts}

        </div>
    );
}

export default PostsPage;

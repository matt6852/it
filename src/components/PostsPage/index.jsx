import React from "react";
import Post from "./Post";
import style from "./style.module.css"

function PostsPage() {
    return (
        <div>
            <div className={style.container}>
                <textarea></textarea>
                <div>
                    <button>add post</button>
                </div>

            </div>
            <Post message="Hi how are you" likeCount="51"/>
            <Post message="its my first post" likeCount="15"/>
            <Post message=" Im third post" likeCount="5"/>

        </div>
    );
}

export default PostsPage;

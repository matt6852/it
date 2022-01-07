import React from "react";
import Post from "./Post";
import style from "./style.module.css"

function PostsPage(props) {

    const renderPosts = props.postsData.map(item => <Post key={item.id} message={item.message}
                                                          likeCount={item.likeCount}/>)

    return (
        <div>
            <div className={style.container}>
                <textarea></textarea>
                <div>
                    <button>add post</button>
                </div>

            </div>
            {renderPosts}

        </div>
    );
}

export default PostsPage;

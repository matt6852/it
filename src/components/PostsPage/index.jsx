import React from "react";
import Post from "./Post";
import style from "./style.module.css"

function PostsPage() {
    const postsData = [
        {
            id: 1, message: "Hi how are you",
            likeCount: 23
        }, {id: 1, message: "BOOOOOO", likeCount: 12}, {id: 1, message: "Whats up???", likeCount: 1},
    ]
    const renderPosts = postsData.map(item => <Post key={item.id} message={item.message} likeCount={item.likeCount}/>)
    
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

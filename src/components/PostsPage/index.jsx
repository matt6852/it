import React from "react";
import Post from "./Post";

function PostsPage() {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <Post message="Hi how are you" likeCount="51" />
      <Post message="its my first post" likeCount="15" />
      <Post message=" Im third post" likeCount="5" />
      {/* <Post /> */}
    </div>
  );
}

export default PostsPage;

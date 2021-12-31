import style from "./style.module.css";
import img from "../../../assets/postImg.jpeg";

const Post = ({ message, likeCount }) => {
  // debugger;
  return (
    <div>
      <img className={style.img} src={img} alt="" width={60} />
      {message}
      <p>likes {likeCount}</p>
    </div>
  );
};

export default Post;

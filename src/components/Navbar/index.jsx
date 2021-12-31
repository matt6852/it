import style from "./style.module.css";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <a>Profile</a>
      <a>Message</a>
      <a>News</a>
      <a>Music</a>
      <a>Settings</a>
    </nav>
  );
};

export default NavBar;

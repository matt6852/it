import logo from "../../assets/logo.jpg";
import style from "./style.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" className={style.image} />
    </header>
  );
};

export default Header;

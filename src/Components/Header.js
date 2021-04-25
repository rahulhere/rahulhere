import classes from "../../styles/Header.module.css";
import Navbar from "../UI/Navbar";
import Hamburger from "../UI/Hamburger";

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.icon}>
        <Hamburger
          classes={classes.hamburger}
          hideSideDrawer={props.hide}
          setHideSideDrawer={props.setHide}
        />
      </div>
    </header>
  );
};

export default Header;

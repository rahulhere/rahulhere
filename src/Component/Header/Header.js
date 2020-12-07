import styles from "./Header.module.css";
import Navbar from "./../../UI/Navbar/Navbar";
import Hamburger from "../../UI/Hamburger/Hamburger";

const Header = (props) => {
  return (
    <header className={styles.Header}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.icon}>
        <Hamburger
          classes={styles.hamburger}
          hideSideDrawer={props.hide}
          setHideSideDrawer={props.setHide}
        />
      </div>
    </header>
  );
};

export default Header;

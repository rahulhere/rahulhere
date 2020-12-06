import styles from "./Header.module.css";
import Navbar from "./../../UI/Navbar/Navbar";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Navbar />
    </header>
  );
};

export default Header;

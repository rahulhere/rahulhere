import styles from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul>
        <NavItem link="home">home</NavItem>
        <NavItem link="about">about</NavItem>
        <NavItem link="skills" offset={-90}>
          resume
        </NavItem>
        <NavItem link="projects">works</NavItem>
        <NavItem link="asfce">contact</NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;

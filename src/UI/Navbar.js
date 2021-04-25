import classes from "../../styles/Navbar.module.css";
import NavItem from "./NavItem";

const Navbar = (props) => {
  return (
    <nav className={classes.Navbar}>
      <ul>
        <NavItem setHide={props.setHide} link="home">
          home
        </NavItem>
        <NavItem setHide={props.setHide} link="about">
          about
        </NavItem>
        <NavItem setHide={props.setHide} link="skills" offset={-90}>
          resume
        </NavItem>
        <NavItem setHide={props.setHide} link="projects">
          works
        </NavItem>
        <li>
          <a onClick={props.setHide} href="mailto:rahulsoni2303@gmail.com">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

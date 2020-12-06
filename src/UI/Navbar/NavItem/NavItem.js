import styles from "./NavItem.module.css";
import { Link } from "react-scroll";

const NavItem = (props) => {
  return (
    <li className={styles.NavItem}>
      <Link
        activeClass={styles.active}
        to={props.link}
        spy={true}
        smooth={true}
        duration={1000}
        offset={props.offset}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavItem;

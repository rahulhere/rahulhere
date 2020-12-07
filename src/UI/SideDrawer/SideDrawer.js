import styles from "./SideDrawer.module.css";
import Navbar from "./../Navbar/Navbar";

const SideDrawer = (props) => {
  return (
    <div
      className={[styles.SideDrawer, props.hide ? styles.hide : null].join(" ")}
    >
      <Navbar setHide={props.setHide} />
    </div>
  );
};

export default SideDrawer;

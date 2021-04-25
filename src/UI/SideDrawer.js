import classes from "../../classes/SideDrawer.module.css";
import Navbar from "./Navbar";

const SideDrawer = (props) => {
  return (
    <div
      className={[classes.SideDrawer, props.hide ? classes.hide : null].join(
        " "
      )}
    >
      <Navbar setHide={props.setHide} />
    </div>
  );
};

export default SideDrawer;

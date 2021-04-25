import classes from "../../styles/Hamburger.module.css";

const Hamburger = (props) => {
  return (
    <div
      className={[
        classes.Hamburger,
        props.classes,
        props.hideSideDrawer ? null : classes.cross,
      ].join(" ")}
      onClick={props.setHideSideDrawer.bind(null, !props.hideSideDrawer)}
    >
      <div className={classes.first}></div>
      <div className={classes.middle}></div>
      <div className={classes.last}></div>
    </div>
  );
};

export default Hamburger;

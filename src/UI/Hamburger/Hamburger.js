import styles from "./Hamburger.module.css";

const Hamburger = (props) => {
  return (
    <div
      className={[
        styles.Hamburger,
        props.classes,
        props.hideSideDrawer ? null : styles.cross,
      ].join(" ")}
      onClick={props.setHideSideDrawer.bind(null, !props.hideSideDrawer)}
    >
      <div className={styles.first}></div>
      <div className={styles.middle}></div>
      <div className={styles.last}></div>
    </div>
  );
};

export default Hamburger;

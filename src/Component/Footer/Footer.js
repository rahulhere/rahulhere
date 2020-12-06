import styles from "./Footer.module.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerSection}>
        <Link
          className={styles.upArrow}
          to={"home"}
          smooth={true}
          duration={1000}
        >
          <i className="fas fa-angle-up"></i>
        </Link>

        <div className={styles.mediaIconsDiv}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rahul-soni-b47514200/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rahulhere/rahulhere/"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/rahulhere___/"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p>© Copyright 2020 Rahul Soni</p>
      </div>
    </footer>
  );
};

export default Footer;

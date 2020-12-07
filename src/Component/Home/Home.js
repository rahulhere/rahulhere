import styles from "./Home.module.css";
import ParticlesBg from "particles-bg";
import reactIcon from "./../../Assets/images/react-icon.png";
import profilePic from "./../../Assets/images/profilepic.jpg";
import canva from "./../../Assets/images/canva.png";
import css3 from "./../../Assets/images/css3.png";
import express from "./../../Assets/images/Expressjs.png";
import html5 from "./../../Assets/images/html5.png";
import nodejs from "./../../Assets/images/nodejs.png";
import office365 from "./../../Assets/images/office365.png";
import react from "./../../Assets/images/react.png";
import engineerBabu from "./../../Assets/images/engineer-babu.jpg";
import burgerKing from "./../../Assets/images/burger-king.jpg";
import transpoTaxi from "./../../Assets/images/transpo-taxi.jpg";
import resumeImg from "./../../Assets/images/resume.jpg";
import resume from "./../../Assets/Rahul Resume.pdf";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Home = () => {
  let [numParticles, setParticles] = useState(40);
  const isTabletMobile = useMediaQuery({ query: "(max-width: 760px)" });
  if (!isTabletMobile && numParticles !== 40) {
    setParticles(120);
  }

  return (
    <div className={styles.Home}>
      <section id="home" className={styles.head}>
        <img src={reactIcon} alt="React Icon" />
        <h1>Rahul Soni</h1>
        <h3>
          A Front-end React Web-Developer with a little extra knowledge of Java
        </h3>
        <div className={styles.links}>
          <a className={styles.github} href="https://github.com/rahulhere">
            <i className="fab fa-github"></i> Github
          </a>
          <a
            className={styles.linkedIn}
            href="https://www.linkedin.com/in/rahul-soni-b47514200/"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <Link
          className={styles.downArrow}
          to={"about"}
          smooth={true}
          duration={1000}
        >
          <i className="fas fa-angle-down"></i>
        </Link>
        <ParticlesBg
          num={numParticles}
          color="#ffffff"
          type="cobweb"
          bg={true}
        />
      </section>

      <section id="about" className={styles.aboutMe}>
        <div className={styles.homeSection}>
          <div className={styles.imgDiv}>
            <img src={profilePic} alt="Profile" />
          </div>
          <div className={styles.textDiv}>
            <h4>About Me</h4>
            <p>
              Good Day! I'm an developer, flexible to almost any kind of digital
              tasks. I'm a Web Developer (Express, Reactjs, Nodejs). Technology
              is my passion. I enjoy to making websites in my spare time and I
              also like to practice typing (Avg. Speed: 50 WPM).
            </p>
            <div className={styles.contactResumeDiv}>
              <div className={styles.contactDetails}>
                <h4>Contact Details</h4>
                <p>Rahul Soni</p>
                <p>Indore</p>
                <p>Madhya Pradesh, India</p>
                <p>+918269934565</p>
                <p>rahulsoni2303@gmail.com</p>
              </div>
              <div className={styles.resume}>
                <a href={resume} target="_blank" rel="noreferrer">
                  <i className="fas fa-cloud-download-alt"></i> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className={[styles.skills, styles.homeSection].join(" ")}
      >
        <div>
          <div>
            <h2>education</h2>
          </div>
          <div className={styles.textDiv}>
            <div>
              <h3>Sagar Institute of Research & Technology, Indore</h3>
              <p className={styles.subHeading}>
                B.Tech. in Information Technology
              </p>
              <span> • 2019-2023</span>
              <p>
                Design, create, and publish dynamic web pages. Communicate
                effectively with clients and fellow workers. Have a sense of
                personality and be able to finish work on time.
              </p>
            </div>
            <div>
              <h3>
                The Complete 2020 Web Development Bootcamp By Dr. Angela Yu
                (Udemy Online Course)
              </h3>
              <p className={styles.subHeading}>
                Web Development Bootcamp Udemy Course
              </p>
              <span> • 2020</span>
              <p>
                Professional developer best practices. Build fully-fledged
                websites and web apps for startups or businesses with latest
                technologies and frameworks
              </p>
            </div>
            <div>
              <h3>
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </h3>
              <p className={styles.subHeading}>
                React Complete Bootcamp Udemy Course
              </p>
              <span> • 2020</span>
              <p>
                Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
                Redux, React Routing, Animations, Next.js and way more!
              </p>
            </div>
            <div>
              <h3>Fatima Convent Higher Secondary School</h3>
              <p className={styles.subHeading}>Passed 10th and 12th (ICSE)</p>
              <span> • 2017 & 2019</span>
              <p>
                I passed my 10th with 82% overall score in{" "}
                <strong>ICSE board</strong> and then I switch to CBSE board to
                prepare for IIT JEE ( got 89.9 percentile). I scored 78% in 12th
                board.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <div>
            <h2>work</h2>
          </div>
          <div className={styles.textDiv}>
            <div>
              <h3>Self-employed</h3>
              <p className={styles.subHeading}>Freelancing</p>
              <span> • September 2020 - Present</span>
              <p>
                Searching for clients on Fiverr. I have also made a react
                website for my friend.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <h2>soft skills</h2>
          </div>
          <div className={styles.textDiv}>
            <div>
              <p>
                Easily Adapt to different environments, Team Leadership,
                Communication, Creative thinking, Team Work, Positive Mentality,
                Problem Solving, Management
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>technical skills</h2>
          </div>
          <div className={styles.textDiv}>
            <div>
              <p>
                Full Stack Web Development (HTML, CSS, JS, Expressjs, Reactjs,
                Nodejs), Photo Editing (Pixlr), Content Writing and Blogging,
                Computer Systems Setup, Computer Troubleshooting, Microsoft
                Productivity Softwares (Word, Excel, etc), Typist (About 50 WPM
                average)
              </p>
              <div className={styles.techImages}>
                <img src={canva} alt="Tech Logo" />
                <img src={css3} alt="Tech Logo" />
                <img src={express} alt="Tech Logo" />
                <img src={html5} alt="Tech Logo" />
                <img src={nodejs} alt="Tech Logo" />
                <img src={office365} alt="Tech Logo" />
                <img src={react} alt="Tech Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className={styles.projects}>
        <div className={styles.homeSection}>
          <h2>Check out some of my works</h2>
          <div className={styles.anchorDiv}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://engineer-babu.netlify.app/"
            >
              <div className={styles.mainDiv}>
                <img src={engineerBabu} alt="Engineer Babu Official Site" />
                <div className={styles.textDiv}>
                  <h3>Enginner Babu</h3>
                  <p>
                    A clone website of Official Engineer Babu website. Expect
                    experienced engineers, nothing less! Hire skilled engineers
                    today in any domain.
                  </p>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://transpo-taxi.netlify.app/"
            >
              <div className={styles.mainDiv}>
                <img src={transpoTaxi} alt="Clone of a WordPress Site" />
                <div className={styles.textDiv}>
                  <h3>Transpo - Taxi</h3>
                  <p>
                    Clone of a wordpress site created using React. Transpo -
                    Taxi is mainland's best taxi company so just THINK TRANSPO
                    TAXI IF YOU THINK TRANSPORTATION
                  </p>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://burger-king.netlify.app/"
            >
              <div className={styles.mainDiv}>
                <img src={burgerKing} alt="Burger King Website" />
                <div className={styles.textDiv}>
                  <h3>Burger King</h3>
                  <p>
                    This website was created when I was learning React to master
                    all core concepts. It also uses Axios and Firebase (for
                    backend database)
                  </p>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://job-resume.netlify.app/"
            >
              <div className={styles.mainDiv}>
                <img src={resumeImg} alt="Resume Clone" />
                <div className={styles.textDiv}>
                  <h3>Resume Clone</h3>
                  <p>
                    This is the clone of some resume which I though interesting
                    and hence created it for practice.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

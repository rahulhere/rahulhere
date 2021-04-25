import { useState } from "react";
import Head from "next/head";
import classes from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { useMediaQuery, useTheme } from "@material-ui/core";
const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });
import { Link } from "react-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const projects = [
  {
    link: "https://www.moreandhigh.com/",
    img: "moreandhigh.png",
    imgAlt: "Yoddha Official Website",
    heading: "More and High",
    description:
      "Official website of YODDHA. More and High Technology Private Limited, which Yoddha produces. Our main goal is to protect every human being and the data being used by them.",
  },
  {
    link: "https://www.revonetwork.app/",
    img: "revonetwork.png",
    imgAlt: "Revo Network Official Website",
    heading: "Revo Network",
    description:
      "Official website of REVO NETWORK. Your one-stop window to the limitless world of DeFi. We ignite interoperable innovations of DeFi to end user’s on tap.",
  },
  {
    link: "https://engineer-babu.netlify.app/",
    img: "engineer-babu.jpg",
    imgAlt: "Engineer Babu Official Site",
    heading: "Enginner Babu",
    description:
      "A clone website of Official Engineer Babu website. Expect experienced engineers, nothing less! Hire skilled engineers today in any domain.",
  },
  {
    link: "https://transpo-taxi.netlify.app/",
    img: "transpo-taxi.jpg",
    imgAlt: "Clone of a WordPress Site",
    heading: "Transpo - Taxi",
    description:
      "Clone of a wordpress site created using React. Transpo - Taxi is mainland's best taxi company so just THINK TRANSPO TAXI IF YOU THINK TRANSPORTATION",
  },
  {
    link: "https://burger-king.netlify.app/",
    img: "burger-king.jpg",
    imgAlt: "Burger King Website",
    heading: "Burger King",
    description:
      "This website was created when I was learning React to master all core concepts. It also uses Axios and Firebase (for backend database)",
  },
  {
    link: "https://job-resume.netlify.app/",
    img: "resume.jpg",
    imgAlt: "Resume Clone",
    heading: "Resume Clone",
    description:
      "This is the clone of some resume which I though interesting and hence created it for practice.",
  },
];

export default function Index() {
  let [numParticles, setParticles] = useState(40);
  const theme = useTheme();
  const isTabletMobile = useMediaQuery(theme.breakpoints.down(760));
  if (!isTabletMobile && numParticles !== 40) {
    setParticles(120);
  }

  return (
    <>
      <Head>
        <title>Rahul Soni</title>
      </Head>

      <div className={classes.Home}>
        <section id="home" className={classes.head}>
          <img src="react-icon.png" alt="React Icon" />
          <h1>Rahul Soni</h1>
          <h3>
            A Front-end React Web-Developer with a little extra knowledge of
            Java
          </h3>
          <div className={classes.links}>
            <a className={classes.github} href="https://github.com/rahulhere">
              <GitHubIcon /> Github
            </a>
            <a
              className={classes.linkedIn}
              href="https://www.linkedin.com/in/rahul-soni-b47514200/"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
          <Link
            className={classes.downArrow}
            to={"about"}
            smooth={true}
            duration={1000}
          >
            <ExpandMoreIcon />
          </Link>
          <ParticlesBg
            num={numParticles}
            color="#ffffff"
            type="cobweb"
            bg={true}
          />
        </section>

        <section id="about" className={classes.aboutMe}>
          <div className={classes.homeSection}>
            <div className={classes.imgDiv}>
              <img src="profilepic.jpg" alt="Profile" />
            </div>
            <div className={classes.textDiv}>
              <h4>About Me</h4>
              <p>
                Good Day! I'm an developer, flexible to almost any kind of
                digital tasks. I'm a Web Developer (Express, Reactjs, Nodejs).
                Technology is my passion. I enjoy to making websites in my spare
                time and I also like to practice typing (Avg. Speed: 50 WPM).
              </p>
              <div className={classes.contactResumeDiv}>
                <div className={classes.contactDetails}>
                  <h4>Contact Details</h4>
                  <p>Rahul Soni</p>
                  <p>Indore</p>
                  <p>Madhya Pradesh, India</p>
                  <p>+918269934565</p>
                  <p>rahulsoni2303@outlook.com</p>
                </div>
                <div className={classes.resume}>
                  <a
                    href="/RahulSoni_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CloudDownloadIcon /> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className={[classes.skills, classes.homeSection].join(" ")}
        >
          <div>
            <div>
              <h2>education</h2>
            </div>
            <div className={classes.textDiv}>
              <div>
                <h3>Sagar Institute of Research & Technology, Indore</h3>
                <p className={classes.subHeading}>
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
                <p className={classes.subHeading}>
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
                <p className={classes.subHeading}>
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
                <p className={classes.subHeading}>
                  Passed 10th and 12th (ICSE)
                </p>
                <span> • 2017 & 2019</span>
                <p>
                  I passed my 10th with 82% overall score in{" "}
                  <strong>ICSE board</strong> and then I switch to CBSE board to
                  prepare for IIT JEE ( got 89.9 percentile). I scored 78% in
                  12th board.
                </p>
              </div>
            </div>
          </div>

          <hr />

          <div>
            <div>
              <h2>work</h2>
            </div>
            <div className={classes.textDiv}>
              <div>
                <h3>Self-employed</h3>
                <p className={classes.subHeading}>Freelancing</p>
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
            <div className={classes.textDiv}>
              <div>
                <p>
                  Easily Adapt to different environments, Team Leadership,
                  Communication, Creative thinking, Team Work, Positive
                  Mentality, Problem Solving, Management
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>technical skills</h2>
            </div>
            <div className={classes.textDiv}>
              <div>
                <p>
                  Full Stack Web Development (HTML, CSS, JS, Expressjs, Reactjs,
                  Nodejs), Photo Editing (Pixlr), Content Writing and Blogging,
                  Computer Systems Setup, Computer Troubleshooting, Microsoft
                  Productivity Softwares (Word, Excel, etc), Typist (About 50
                  WPM average)
                </p>
                <div className={classes.techImages}>
                  <img src="canva.png" alt="Tech Logo" />
                  <img src="css3.png" alt="Tech Logo" />
                  <img src="Expressjs.png" alt="Tech Logo" />
                  <img src="html5.png" alt="Tech Logo" />
                  <img src="nodejs.png" alt="Tech Logo" />
                  <img src="office365.png" alt="Tech Logo" />
                  <img src="react.png" alt="Tech Logo" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className={classes.projects}>
          <div className={classes.homeSection}>
            <h2>Check out some of my works</h2>
            <div className={classes.anchorDiv}>
              {projects.map((project, i) => (
                <a target="_blank" rel="noreferrer" key={i} href={project.link}>
                  <div className={classes.mainDiv}>
                    <img src={project.img} alt={project.alt} />
                    <div className={classes.textDiv}>
                      <h3>{project.heading}</h3>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

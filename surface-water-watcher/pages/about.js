import styles from "../styles/About.module.css";

export const About = () => {
  return (
    <div className="page-container">
      <div className={styles.main}>
        <h1>About Me</h1>
        <div className={styles.me}>
          <h3>Jeff Albaral</h3>
          <h6>Full Stack Software Engineer</h6>
          {/* <img src="" /> */}
          <p>
            Located in Rochester, NY, I am currently finishing the immersive
            fullstack development program at Fullstack Academy. I am currently
            looking for employment and would love to connect via email at
            jeffalbaral@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

// server side rendering
// export const getServerSideProps = async (pageContext) => {};

export default About;

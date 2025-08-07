import styles from './HeroStyles.module.css';
import heroImg from '../../assets/irfan.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramLight from '../../assets/instagram-dark-logo.svg';
import instagramDark from '../../assets/insta-light.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  // const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;

  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
    <div className={styles.info}>
  <h1>
    Irfan
    <br />
    Mallick
  </h1>
  <h2>Mechanical Engineer</h2>
  <span>
   <a href="https://www.instagram.com/irfanmallick8x/" target="_blank">
     <img src={instagramIcon} alt="Instagram icon" />
  </a>
    <a href="https://github.com/irfanmalik8x" target="_blank">
      <img src={githubIcon} alt="Github icon" />
    </a>
    <a href="https://www.linkedin.com/in/irfan-mallick-059405379/" target="_blank">
      <img src={linkedinIcon} alt="Linkedin icon" />
    </a>
  </span>
  <p className={styles.description}>
    A dedicated Mechanical Engineer skilled in CAD design, thermal systems, and industrial automation with hands-on project experience in manufacturing and mechanical simulations.
  </p>
  <a href={CV} download>
    <button className="hover">Resume</button>
  </a>
</div>

    </section>
  );
}

export default Hero;

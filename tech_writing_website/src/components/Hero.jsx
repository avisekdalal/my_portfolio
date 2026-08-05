import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="welcome" className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Technical Writer</p>
          <h1 className={styles.heroTitle}>
            Making complex software easy to use for users and developers.
          </h1>
          <p className={styles.heroDescription}>
            I bridge the gap between software and users. By creating clear
            product guides and precise developer content, I ensure products are
            easier to understand and adopt.
          </p>
          <div className={styles.buttons}>
            <a className="button button--primary button--lg" href="#portfolio">
              View Portfolio
            </a>
            <a className="button button--secondary button--lg" href="#contact">
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

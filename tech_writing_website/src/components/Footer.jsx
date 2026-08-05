import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <h3 className={styles.title}>Projects</h3>
          <ul className={styles.list}>
            <li>
              <a href="#portfolio">Documentation</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>About</h3>
          <ul className={styles.list}>
            <li>
              <a href="#about">About Me</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Contact</h3>
          <ul className={styles.list}>
            <li>
              <a href="#contact">Get in Touch</a>
            </li>
            <li>
              <a
                href="https://github.com/avisekdalal"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/avisekdalal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`container ${styles.copyright}`}>
        Copyright © {year} Avisek Dalal. All rights reserved.
      </div>
    </footer>
  );
}

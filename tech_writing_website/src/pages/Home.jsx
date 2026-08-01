import {Link} from 'react-router-dom';
import HomepageFeatures from '../components/HomepageFeatures';
import usePageTitle from '../hooks/usePageTitle';
import styles from './Home.module.css';

const tagline = 'Making complex software easy to use for users and developers.';

export default function Home() {
  usePageTitle('Portfolio');

  return (
    <>
      <header className={styles.heroBanner}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Technical Writer</p>
            <h1 className={styles.heroTitle}>{tagline}</h1>
            <p className={styles.heroDescription}>
              I bridge the gap between software and users. By creating clear
              product guides and precise developer content, I ensure products
              are easier to understand and adopt.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs">
                View Portfolio
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/contact-me">
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </>
  );
}

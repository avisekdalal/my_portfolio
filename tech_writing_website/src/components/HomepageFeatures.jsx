import { Link } from 'react-router-dom';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.aboutBlock}>
          <h2 className={styles.aboutHeading}>About Me</h2>
          <p className={styles.aboutText}>
            I deliver clear, scalable documentation for SaaS, ERP, and cloud
            platforms. Throughout my career, I have maintained a comprehensive
            suite of technical deliverables and implemented context-sensitive help
            and SmartHelp systems to elevate the user experience. I excel in
            structured authoring and thrive in Agile environments, partnering with
            product and engineering teams to drive adoption. By adhering to style
            guides, I ensure every piece of content meets the highest standards of
            accuracy, quality, and clarity. Learn more on my{' '}
            <Link to="/about-me">About Me</Link> page.
          </p>
        </div>
      </div>
    </section>
  );
}

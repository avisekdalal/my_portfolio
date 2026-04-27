import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.aboutBlock}>
          <Heading as="h2" className={styles.aboutHeading}>
            About Me
          </Heading>
          <p className={styles.aboutText}>
            I specialize in end-user and developer content, with a focus on
            context-sensitive online help, user guides, troubleshooting manuals,
            release notes, and API docs. I collaborate closely with engineering
            and product teams to create documentation that is accurate,
            practical, and easy to follow. For more information on my experience
            and skills, see the <Link to="/about-me">About Me</Link> page.
          </p>
        </div>
      </div>
    </section>
  );
}

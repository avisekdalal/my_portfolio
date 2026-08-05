import styles from './StatementHero.module.css';

const skills = [
  'Technical writing',
  'Information Architecture (IA)',
  'Content Strategy',
  'Information Development',
];

const suite = [
  'Online help',
  'User guides',
  'Installation & integration guides',
  'API & SDK documentation',
  'Release information',
];

export default function StatementHero() {
  return (
    <section
      id="focus"
      className={styles.section}
      aria-labelledby="statement-heading"
    >
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 id="statement-heading" className={styles.headline}>
              <span className={styles.headlineLine}>Clear Documentation.</span>
              <span className={styles.headlineLine}>
                Better Software Experience.
              </span>
            </h2>
            <p className={styles.blurb}>
              I bridge the gap between software and users. By creating clear
              product guides and precise developer content, I ensure products are
              easier to understand and adopt.
            </p>
          </div>

          <aside className={styles.right}>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Core Skills</h3>
              <ul className={styles.tagList}>
                {skills.map((skill) => (
                  <li key={skill} className={styles.tag}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Documentation Suite</h3>
              <ul className={styles.tagList}>
                {suite.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

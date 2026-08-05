import styles from './StatementHero.module.css';

export default function StatementHero() {
  return (
    <section className={styles.section} aria-labelledby="statement-heading">
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
              <p className={styles.blockText}>
                Technical writing, Information Architecture (IA), Content
                Strategy, Information Development
              </p>
            </div>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Documentation Suite</h3>
              <p className={styles.blockText}>
                Online help, user guide, Installation &amp; integration guides,
                API &amp; SDK documentation, Release Information
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

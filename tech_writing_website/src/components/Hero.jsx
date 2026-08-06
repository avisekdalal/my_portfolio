import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="welcome" className={styles.heroBanner}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <h1 className={styles.name}>Avisek Dalal</h1>
            <p className={styles.role}>
              Senior Technical Writer | Documentation Engineer
            </p>
            <div className={styles.actions}>
              <a className="button button--primary" href="#samples">
                View samples
              </a>
              <a
                className="button button--secondary"
                href="/resume-placeholder.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download resume
              </a>
            </div>
          </div>

          <aside className={styles.right}>
            <h2 className={styles.label}>About Me</h2>
            <p className={styles.aboutText}>
              For the past eight years, I&apos;ve worked alongside engineers,
              product managers, and designers to turn complex software into
              documentation people actually use. My work spans enterprise
              structured authoring, Docs-as-Code, API documentation, user guides,
              and information architecture.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

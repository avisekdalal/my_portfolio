import { samples } from '../data/samples';
import styles from './DocumentationSamples.module.css';

export default function DocumentationSamples() {
  return (
    <section
      id="samples"
      className={styles.section}
      aria-labelledby="documentation-samples-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <header className={styles.intro}>
            <h2 id="documentation-samples-heading" className={styles.title}>
              Documentation Samples
            </h2>
            <p className={styles.subtext}>
              Selected documentation samples from real projects &amp; original
              work, demonstrating how I simplify complex software for users and
              developers.
            </p>
          </header>

          <ul className={styles.grid}>
            {samples.map((sample) => {
              const content = (
                <>
                  <span className={styles.type}>{sample.type}</span>
                  <h3 className={styles.cardTitle}>{sample.title}</h3>
                  <p className={styles.cardSummary}>{sample.summary}</p>
                  <span className={styles.cardHint}>
                    {sample.href ? 'View sample' : 'Link coming soon'}
                  </span>
                </>
              );

              return (
                <li key={sample.id} className={styles.card}>
                  {sample.href ? (
                    <a
                      className={styles.cardLink}
                      href={sample.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={styles.cardLink}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

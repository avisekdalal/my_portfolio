import { samples } from '../data/samples';
import styles from './DocumentationSamples.module.css';

export default function DocumentationSamples() {
  return (
    <section
      id="samples"
      className={styles.section}
      aria-labelledby="featured-projects-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <header className={styles.intro}>
            <h2 id="featured-projects-heading" className={styles.title}>
              Featured Projects
            </h2>
            <p className={styles.subtext}>
              Selected enterprise documentation projects demonstrating how I
              design information architecture and deliver clear, reusable
              content for complex software.
            </p>
          </header>

          <ul className={styles.grid}>
            {samples.map((sample) => (
              <li key={sample.id} className={styles.card}>
                <span className={styles.type}>{sample.type}</span>
                <h3 className={styles.cardTitle}>{sample.title}</h3>

                <div className={styles.block}>
                  <h4 className={styles.blockLabel}>My Contribution</h4>
                  <p className={styles.cardSummary}>{sample.contribution}</p>
                </div>

                <div className={styles.block}>
                  <h4 className={styles.blockLabel}>Highlights</h4>
                  <ul className={styles.chips}>
                    {sample.highlights.map((highlight) => (
                      <li key={highlight} className={styles.chip}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.actions}>
                  {sample.sampleHref ? (
                    <a
                      className={`button button--secondary ${styles.cta}`}
                      href={sample.sampleHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Sample
                    </a>
                  ) : (
                    <span
                      className={`button button--secondary ${styles.cta} ${styles.ctaDisabled}`}
                      aria-disabled="true"
                    >
                      Read Sample
                    </span>
                  )}
                  {sample.liveHref ? (
                    <a
                      className={`button button--primary ${styles.cta}`}
                      href={sample.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Documentation
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

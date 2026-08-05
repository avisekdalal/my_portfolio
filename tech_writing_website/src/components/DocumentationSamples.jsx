import styles from './DocumentationSamples.module.css';

export default function DocumentationSamples() {
  return (
    <section
      className={styles.section}
      aria-labelledby="documentation-samples-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <h2 id="documentation-samples-heading" className={styles.title}>
            Documentation Samples
          </h2>
          <p className={styles.subtext}>
            Selected documentation samples from real projects &amp; original
            work, demonstrating how I simplify complex software for users and
            developers.
          </p>
        </div>
      </div>
    </section>
  );
}

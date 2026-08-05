import { Link, Navigate, useParams } from 'react-router-dom';
import { getCategoryBySlug } from '../data/portfolio';
import styles from './PortfolioCategory.module.css';

export default function PortfolioCategory() {
  const { category: slug } = useParams();
  const category = getCategoryBySlug(slug);

  if (!category) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{category.title} Samples</h1>
          <p className={styles.intro}>{category.intro}</p>

          <h2 className={styles.sectionTitle}>Samples</h2>
          <div className={styles.samples}>
            {category.samples.map((sample, index) => (
              <article key={sample.title} className={styles.sample}>
                <h3 className={styles.sampleTitle}>
                  Sample {index + 1}: {sample.title}
                </h3>
                <p className={styles.sampleBody}>
                  <em>{sample.body}</em>
                </p>
              </article>
            ))}
          </div>

          <p className={styles.back}>
            <Link to="/portfolio">← Back to portfolio categories</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

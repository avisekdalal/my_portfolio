import { Link } from 'react-router-dom';
import { portfolioCategories } from '../data/portfolio';
import styles from './PortfolioCategories.module.css';

export default function PortfolioCategories() {
  return (
    <>
      <h1 className={styles.heroTitle}>Documentation Portfolio</h1>
      <p className={styles.heroIntro}>
        The samples below demonstrate my ability to translate complex information,
        workflows, and processes into clear, high-utility documentation for
        targeted audiences. My core deliverables include user guides, API
        documentation, installation guides, and deep-dives into emerging
        technologies via structured white papers. To explore my work, simply
        select a category below.
      </p>

      <div className={styles.grid}>
        {portfolioCategories.map((category) => (
          <Link
            key={category.slug}
            to={`/portfolio/${category.slug}`}
            className={styles.card}
          >
            <h2 className={styles.cardTitle}>{category.title}</h2>
            <p className={styles.cardDescription}>{category.description}</p>
            <span className={styles.cardAction}>View samples →</span>
          </Link>
        ))}
      </div>
    </>
  );
}

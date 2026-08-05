import PortfolioCategories from '../components/PortfolioCategories';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <PortfolioCategories />
        </div>
      </div>
    </main>
  );
}

import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.copyright}`}>
        Copyright © {year} Avisek Dalal. All rights reserved.
      </div>
    </footer>
  );
}

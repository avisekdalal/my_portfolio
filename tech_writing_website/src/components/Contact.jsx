import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.inner}>
          <h2 id="contact-heading" className={styles.title}>
            Contact
          </h2>
          <p className={styles.text}>
            Interested in discussing a technical writing opportunity or have a
            question about my work? I&apos;d be happy to connect.
          </p>
          <div className={styles.actions}>
            <a
              className="button button--primary button--lg"
              href="mailto:avisekdalal.w@gmail.com"
            >
              Email
            </a>
            <a
              className="button button--secondary button--lg"
              href="https://www.linkedin.com/in/avisekdalal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

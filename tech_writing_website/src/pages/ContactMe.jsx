import usePageTitle from '../hooks/usePageTitle';
import styles from './ContactMe.module.css';

export default function ContactMe() {
  usePageTitle('Contact Me');

  return (
    <main className={styles.page}>
      <div className="container">
        <article className={styles.article}>
          <h1>Let's Connect</h1>
          <p>
            Thank you for reviewing my portfolio. If you are interested in my
            work and would like to discuss potential career opportunities,
            please reach out via email or LinkedIn.
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:avisekdalal.w@gmail.com">avisekdalal.w@gmail.com</a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/avisekdalal/"
                target="_blank"
                rel="noopener noreferrer">
                avisekdalal
              </a>
            </li>
          </ul>
          <p>
            If your hiring team needs an up-to-date copy of my resume, or if you
            would like to discuss an open role, kindly send a message to my
            email. I am actively looking for my next full-time technical writing
            opportunity and look forward to hearing from you.
          </p>
        </article>
      </div>
    </main>
  );
}

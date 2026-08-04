import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const categories = [
  {
    title: 'User Guide',
    description:
      'End-user documentation focused on task completion, onboarding, and software feature adoption.',
    to: '/docs/user-guide',
  },
  {
    title: 'API Documentation',
    description:
      'Developer-facing references featuring endpoints, authentication protocols, and request/response payloads.',
    to: '/docs/api-documentation',
  },
  {
    title: 'Installation Guides',
    description:
      'Step-by-step system setup instructions covering dependencies, environment configuration, and deployment.',
    to: '/docs/installation-manuals',
  },
  {
    title: 'White Papers',
    description:
      'In-depth technical topics exploring technical writing concepts, methodologies, and emerging technologies.',
    to: '/docs/white-papers',
  },
];

export default function PortfolioCategories() {
  return (
    <>
      <Heading as="h1" className={styles.heroTitle}>
        Documentation Portfolio
      </Heading>
      <p className={styles.heroIntro}>
        The samples below demonstrate my ability to translate complex
        information, workflows, and processes into clear, high-utility
        documentation for targeted audiences. My core deliverables include user
        guides, API documentation, installation guides, and deep-dives into
        emerging technologies via structured white papers. To explore my work,
        simply select a category card below or browse the sidebar navigation.
      </p>

      <div className={styles.grid}>
        {categories.map((category) => (
          <Link
            key={category.title}
            to={category.to}
            className={styles.card}>
            <Heading as="h2" className={styles.cardTitle}>
              {category.title}
            </Heading>
            <p className={styles.cardDescription}>{category.description}</p>
            <span className={styles.cardAction}>View samples →</span>
          </Link>
        ))}
      </div>
    </>
  );
}

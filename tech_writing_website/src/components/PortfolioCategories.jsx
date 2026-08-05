import { useState } from 'react';
import { portfolioCategories } from '../data/portfolio';
import styles from './PortfolioCategories.module.css';

export default function PortfolioCategories() {
  const [activeSlug, setActiveSlug] = useState(null);
  const activeCategory = portfolioCategories.find(
    (category) => category.slug === activeSlug,
  );

  function toggleCategory(slug) {
    setActiveSlug((current) => (current === slug ? null : slug));
  }

  return (
    <section id="portfolio" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.heroTitle}>Documentation Portfolio</h2>
          <p className={styles.heroIntro}>
            The samples below demonstrate my ability to translate complex
            information, workflows, and processes into clear, high-utility
            documentation for targeted audiences. My core deliverables include
            user guides, API documentation, installation guides, and deep-dives
            into emerging technologies via structured white papers. Select a
            category to view sample outlines.
          </p>

          <div className={styles.grid}>
            {portfolioCategories.map((category) => {
              const isActive = activeSlug === category.slug;
              return (
                <button
                  key={category.slug}
                  type="button"
                  className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
                  aria-expanded={isActive}
                  onClick={() => toggleCategory(category.slug)}
                >
                  <h3 className={styles.cardTitle}>{category.title}</h3>
                  <p className={styles.cardDescription}>{category.description}</p>
                  <span className={styles.cardAction}>
                    {isActive ? 'Hide samples ↑' : 'View samples →'}
                  </span>
                </button>
              );
            })}
          </div>

          {activeCategory && (
            <div className={styles.samplesPanel} id={`samples-${activeCategory.slug}`}>
              <h3 className={styles.samplesTitle}>
                {activeCategory.title} Samples
              </h3>
              <p className={styles.samplesIntro}>{activeCategory.intro}</p>
              <div className={styles.samples}>
                {activeCategory.samples.map((sample, index) => (
                  <article key={sample.title} className={styles.sample}>
                    <h4 className={styles.sampleTitle}>
                      Sample {index + 1}: {sample.title}
                    </h4>
                    <p className={styles.sampleBody}>
                      <em>{sample.body}</em>
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

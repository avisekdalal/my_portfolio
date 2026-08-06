import { useState } from 'react';
import styles from './StatementHero.module.css';
import { workflowSteps } from './workflowIcons';

const helpItems = [
  'Build scalable documentation',
  'Publish documents that end users can actually use',
  'Reduce confusion',
  'Improve developer onboarding',
  'Implement docs-as-code',
  'Migrate from legacy documentation practise to structured authoring',
  'Reduce content duplication',
  'Create reusable content',
];

export default function StatementHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = workflowSteps[activeIndex];

  return (
    <section
      id="focus"
      className={styles.section}
      aria-labelledby="statement-heading"
    >
      <div className="container">
        <h2 id="statement-heading" className={styles.headline}>
          <span className={styles.headlineLine}>
            Helping software teams build documentation users actually trust.
          </span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.left}>
            <h3 className={styles.helpTitle}>I help teams:</h3>
            <ul className={styles.helpList}>
              {helpItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.right} aria-label="Documentation lifecycle">
            <div className={styles.cycleWrap}>
              <div className={styles.cycle} role="list">
                <div className={styles.cycleRing} aria-hidden="true" />
                <div className={styles.cycleCore}>
                  <p className={styles.cycleCoreLabel}>Docs lifecycle</p>
                  <p className={styles.cycleCoreStep}>{activeStep.label}</p>
                  <p className={styles.cycleCoreDetail}>{activeStep.detail}</p>
                </div>

                {workflowSteps.map((step, index) => {
                  const angleDeg =
                    (360 / workflowSteps.length) * index - 90;
                  const angleRad = (angleDeg * Math.PI) / 180;
                  const radius = 42;
                  const left = 50 + radius * Math.cos(angleRad);
                  const top = 50 + radius * Math.sin(angleRad);
                  const isActive = index === activeIndex;
                  const { Icon } = step;

                  return (
                    <button
                      key={step.label}
                      type="button"
                      role="listitem"
                      className={`${styles.cycleNode} ${isActive ? styles.cycleNodeActive : ''}`}
                      style={{ left: `${left}%`, top: `${top}%` }}
                      aria-pressed={isActive}
                      aria-label={`${step.label}: ${step.detail}`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                    >
                      <span className={styles.cycleNodeIcon}>
                        <Icon />
                      </span>
                      <span className={styles.cycleNodeLabel}>{step.label}</span>
                    </button>
                  );
                })}
              </div>

              <p className={styles.cycleHint}>
                Continuous cycle — Maintain feeds the next Discover.
              </p>
            </div>

            <ol className={styles.mobileWorkflow}>
              {workflowSteps.map((step) => {
                const { Icon } = step;
                return (
                  <li key={step.label} className={styles.mobileStep}>
                    <span className={styles.mobileIcon}>
                      <Icon />
                    </span>
                    <div>
                      <span className={styles.mobileLabel}>{step.label}</span>
                      <span className={styles.mobileDetail}>{step.detail}</span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}

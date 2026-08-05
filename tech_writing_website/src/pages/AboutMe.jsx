import styles from './AboutMe.module.css';

const competencyGroups = [
  {
    label: 'Core Skills',
    items: [
      'Technical Writing',
      'Information Architecture',
      'Content Strategy',
      'Content Design & Information Development',
      'Product Documentation',
    ],
  },
  {
    label: 'Documentation Suite',
    items: [
      'Online Help',
      'User Guides & Manuals',
      'Installation & Integration Guides',
      'API & SDK Documentation',
      'How-to Guides & Troubleshooting',
      'FAQs & Release Information',
    ],
  },
];

const toolCategories = [
  {
    title: 'Enterprise Authoring Tools & CCMS',
    tools: [
      'MadCap Flare',
      'PTC Arbortext Editor',
      'XMetal Author',
      'IXIA CCMS',
      'Adobe FrameMaker',
      'DITA XML',
      'Structured Authoring',
      'Single Sourcing',
      'Topic-based Authoring',
      'Content Reuse',
      'Git',
      'Perforce P4',
      'TortoiseSVN',
    ],
  },
  {
    title: 'API Documentation & Languages',
    tools: [
      'Postman',
      'Swagger',
      'Redocly',
      'XML',
      'Markdown',
      'LaTeX',
      'HTML',
      'JavaScript',
      'React',
      'Python',
    ],
  },
  {
    title: 'Product Management, Collaboration & Design',
    tools: ['Jira', 'Azure DevOps', 'Confluence', 'Figma', 'Miro', 'Visio'],
  },
];

const experience = [
  {
    year: '2025',
    title: 'Technical Writer',
    company: 'Insight Global',
    description:
      'Spearheaded the implementation of a Docs-as-Code workflow by converting product documentation to Markdown files, migrating content to Git repositories, and deploying a corporate static site built on Hugo. Designed the complete information architecture and enforced style consistency across all deliverables following the Microsoft Manual of Style (MSTP).',
  },
  {
    year: '2023',
    title: 'Senior Technical Writer',
    company: 'OpenText',
    description:
      'Owned and managed a comprehensive suite of deliverables for two flagship SaaS products. Contributed to a major migration project to structured authoring using PTC Arbortext Editor, ensuring content quality through rigorous XML schema validation and functional product testing to match true system behaviour.',
  },
  {
    year: '2022',
    title: 'Senior Technical Writer',
    company: 'SquareShift Technologies',
    description:
      'Partnered with cross-functional teams to author technical end-user manuals alongside developer-facing API and SDK reference documentation. Collaborated with UX teams to create customer-facing UI microcopy while systematically maintaining the internal Confluence knowledge base.',
  },
  {
    year: '2020',
    title: 'Technical Writer',
    company: 'Infor',
    description:
      'Built online help for a new product from scratch leveraging IXIA CCMS, created DITA maps, and utilized single-sourcing for maximum content reuse. Successfully implemented Infor SmartHelp and context-sensitive help using metadata tagging to provide field-level help and accelerate user onboarding.',
  },
  {
    year: '2016',
    title: 'Technical Writer',
    company: 'Cyient',
    description:
      'Launched technical writing career by creating foundational deliverables like quick start guides, user manuals, and installation workflows. Collaborated closely with subject matter experts to translate dense product functionality into consistent, clear content by mastering strict corporate style guides.',
  },
];

function ToolMarquee({ tools }) {
  const pills = tools.map((tool) => (
    <span key={tool} className={styles.pill}>
      {tool}
    </span>
  ));

  return (
    <div className={styles.marqueeWrap} aria-label={tools.join(', ')}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeGroup}>{pills}</div>
        <div className={styles.marqueeGroup} aria-hidden="true">
          {pills}
        </div>
      </div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <>
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>About Me</h1>
            <p className={styles.intro}>
              Technical writer with over 7 years of experience creating clear,
              scalable documentation for complex software products. Throughout my
              career, I have bridged the gap between engineering and users by
              collaborating with cross-functional teams to translate intricate
              technical functionality into intuitive documentation.
            </p>
            <p className={styles.intro}>
              I specialize in modern documentation strategies, with deep expertise
              in enterprise structured authoring (DITA XML) and Docs-as-Code
              workflows (Git and Markdown). By designing single-source content
              models in DITA XML, I ensure global consistency and eliminate
              repetitive maintenance. Simultaneously, I leverage Git, Markdown, and
              static site generators to embed documentation directly into
              engineering pipelines.
            </p>
            <p className={styles.intro}>
              Whether architecting complex content reuse or deploying automated
              publishing workflows, I deliver efficient, multi-channel technical
              documentation that scales with your product.
            </p>
          </div>
        </div>
      </header>

      <main className={styles.content}>
        <div className="container">
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Core Competencies & Deliverables
            </h2>
            <div className={styles.competencyGrid}>
              {competencyGroups.map((group) => (
                <article key={group.label} className={styles.competencyCard}>
                  <span className={styles.competencyLabel}>{group.label}</span>
                  <ul className={styles.competencyList}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Tool Stack</h2>
            <p className={styles.sectionSubtitle}>
              Technologies and platforms I use across authoring, publishing, and
              collaboration workflows.
            </p>
            {toolCategories.map((category) => (
              <div key={category.title} className={styles.toolSection}>
                <h3 className={styles.toolCategory}>{category.title}</h3>
                <ToolMarquee tools={category.tools} />
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Career Journey</h2>
            <ol className={styles.timeline}>
              {experience.map((role) => (
                <li
                  key={`${role.year}-${role.company}`}
                  className={styles.timelineItem}
                >
                  <span className={styles.year}>{role.year}</span>
                  <p className={styles.roleTitle}>{role.title}</p>
                  <p className={styles.company}>{role.company}</p>
                  <p className={styles.roleDescription}>{role.description}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>
    </>
  );
}

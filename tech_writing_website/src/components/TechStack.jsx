import styles from './TechStack.module.css';

const categories = [
  {
    title: 'Authoring tools',
    items:
      'MadCap Flare, PTC Arbortext Editor, XMetal Author, IXIA CCMS, Redocly, Confluence',
  },
  {
    title: 'Docs-as-code, API, & Design tools',
    items:
      'VS Code (Markdown), Hugo, Docusaurus, Postman, Swagger, Figma, SnagIt',
  },
  {
    title: 'Standards & markup languages',
    items: 'DITA, XML, HTML, Markdown, LaTeX',
  },
  {
    title: 'Version control & platforms',
    items: 'Git, Perforce P4, TortoiseSVN, Jira, Azure DevOps',
  },
  {
    title: 'Code & AI',
    items:
      'JavaScript, Go, Python, Prompt Engineering, SSO, RAG, Claude, GitHub Copilot',
  },
];

export default function TechStack() {
  return (
    <section className={styles.section} aria-labelledby="tech-stack-heading">
      <div className="container">
        <div className={styles.inner}>
          <header className={styles.intro}>
            <h2 id="tech-stack-heading" className={styles.title}>
              Tech Stack
            </h2>
            <p className={styles.subtext}>
              Technologies and platforms I use across authoring, publishing, and
              collaboration workflows.
            </p>
          </header>

          <div className={styles.grid}>
            {categories.map((category) => (
              <div key={category.title} className={styles.block}>
                <h3 className={styles.blockTitle}>{category.title}</h3>
                <p className={styles.blockText}>{category.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

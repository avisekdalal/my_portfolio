import {NavLink} from 'react-router-dom';
import styles from './DocsLayout.module.css';

const sidebarLinks = [
  {to: '/docs', label: 'Portfolio Home', end: true},
  {to: '/docs/user-guide', label: 'User Guide'},
  {to: '/docs/api-documentation', label: 'API Documentation'},
  {to: '/docs/installation-manuals', label: 'Installation Guides'},
  {to: '/docs/white-papers', label: 'White Papers'},
];

export default function DocsLayout({children}) {
  return (
    <div className={`container ${styles.layout}`}>
      <aside className={styles.sidebar} aria-label="Portfolio navigation">
        <p className={styles.sidebarLabel}>Work Samples</p>
        <nav className={styles.sidebarNav}>
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({isActive}) =>
                isActive ? `${styles.sideLink} ${styles.active}` : styles.sideLink
              }>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

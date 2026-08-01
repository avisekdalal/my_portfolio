import {NavLink, Link} from 'react-router-dom';
import {useState} from 'react';
import styles from './Navbar.module.css';

const navItems = [
  {to: '/docs', label: 'Documentation', end: false},
  {to: '/about-me', label: 'About Me', end: true},
];

const rightItems = [
  {
    href: 'https://www.linkedin.com/in/avisekdalal/',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://github.com/avisekdalal',
    label: 'GitHub',
    external: true,
  },
  {to: '/contact-me', label: 'Contact Me'},
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img
            src="/img/profile-placeholder.svg"
            alt="Profile"
            className={styles.logo}
            width="32"
            height="32"
          />
          <span>Welcome</span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          <div className={styles.navLeft}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({isActive}) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className={styles.navRight}>
            {rightItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({isActive}) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                  onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ),
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

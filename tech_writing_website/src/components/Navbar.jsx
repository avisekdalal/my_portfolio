import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

const navItems = [
  { to: '/portfolio', label: 'Documentation' },
  { to: '/about-me', label: 'About Me' },
];

const externalItems = [
  {
    href: 'https://www.linkedin.com/in/avisekdalal/',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/avisekdalal',
    label: 'GitHub',
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img
            src="/img/profile-placeholder.svg"
            alt=""
            className={styles.logo}
            width={32}
            height={32}
          />
          <span>Welcome</span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
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
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className={styles.navRight}>
            {externalItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))}
            <NavLink
              to="/contact-me"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={() => setOpen(false)}
            >
              Contact Me
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

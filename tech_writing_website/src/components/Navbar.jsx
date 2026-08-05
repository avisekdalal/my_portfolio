import { useState } from 'react';
import styles from './Navbar.module.css';

const navItems = [
  { href: '#about', label: 'About Me' },
  { href: '#portfolio', label: 'Documentation' },
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
        <a
          href="#welcome"
          className={styles.brand}
          onClick={() => setOpen(false)}
        >
          <img
            src="/img/profile-placeholder.svg"
            alt=""
            className={styles.logo}
            width={32}
            height={32}
          />
          <span>Welcome</span>
        </a>

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
              <a
                key={item.href}
                href={item.href}
                className={styles.link}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
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
            <a
              href="#contact"
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

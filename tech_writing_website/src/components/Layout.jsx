import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function syncTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute(
    'data-theme',
    prefersDark ? 'dark' : 'light',
  );
}

export default function Layout({ children }) {
  useEffect(() => {
    syncTheme();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => syncTheme();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-main">{children}</div>
      <Footer />
    </div>
  );
}

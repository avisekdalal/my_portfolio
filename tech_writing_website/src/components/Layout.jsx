import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function syncTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute(
    'data-theme',
    prefersDark ? 'dark' : 'light',
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    syncTheme();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => syncTheme();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

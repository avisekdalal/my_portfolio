import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-main">{children}</div>
      <Footer />
    </div>
  );
}

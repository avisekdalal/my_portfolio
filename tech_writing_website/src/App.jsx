import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import PortfolioCategory from './pages/PortfolioCategory';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="contact-me" element={<ContactMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:category" element={<PortfolioCategory />} />
      </Route>
    </Routes>
  );
}

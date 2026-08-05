import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import PortfolioCategories from '../components/PortfolioCategories';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <PortfolioCategories />
      <ContactSection />
    </main>
  );
}

import Hero from '../components/Hero';
import StatementHero from '../components/StatementHero';
import TechStack from '../components/TechStack';
import DocumentationSamples from '../components/DocumentationSamples';
import Companies from '../components/Companies';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatementHero />
      <TechStack />
      <DocumentationSamples />
      <Companies />
      <Contact />
    </main>
  );
}

import Hero from '../components/Hero';
import Companies from '../components/Companies';
import StatementHero from '../components/StatementHero';
import DocumentationSamples from '../components/DocumentationSamples';
import TechStack from '../components/TechStack';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <StatementHero />
      <DocumentationSamples />
      <TechStack />
      <Contact />
    </main>
  );
}

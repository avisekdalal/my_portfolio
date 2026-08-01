import DocsLayout from '../components/DocsLayout';
import PortfolioCategories from '../components/PortfolioCategories';
import usePageTitle from '../hooks/usePageTitle';

export default function Portfolio() {
  usePageTitle('Documentation Portfolio');

  return (
    <DocsLayout>
      <PortfolioCategories />
    </DocsLayout>
  );
}

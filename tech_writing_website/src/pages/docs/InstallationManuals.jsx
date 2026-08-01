import {Link} from 'react-router-dom';
import DocsLayout from '../../components/DocsLayout';
import usePageTitle from '../../hooks/usePageTitle';

export default function InstallationManuals() {
  usePageTitle('Installation Guides');

  return (
    <DocsLayout>
      <article className="prose">
        <h1>Installation Guide Samples</h1>
        <p>
          Setup and deployment documentation covering system requirements,
          installation steps, configuration, and post-install verification.
        </p>

        <h2>Samples</h2>

        <h3>Sample 1: On-Premises Installation Guide</h3>
        <p>
          <em>
            Add an installation manual sample covering prerequisites,
            installation steps, and verification.
          </em>
        </p>

        <h3>Sample 2: Cloud Deployment Guide</h3>
        <p>
          <em>
            Add a sample for deploying and configuring the product in a cloud
            environment.
          </em>
        </p>

        <h3>Sample 3: Upgrade & Migration Guide</h3>
        <p>
          <em>
            Add a sample documenting upgrade paths, migration steps, and
            rollback procedures.
          </em>
        </p>

        <hr />
        <p>
          <Link to="/docs">← Back to portfolio categories</Link>
        </p>
      </article>
    </DocsLayout>
  );
}

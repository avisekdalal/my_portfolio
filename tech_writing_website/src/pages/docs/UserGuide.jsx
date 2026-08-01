import {Link} from 'react-router-dom';
import DocsLayout from '../../components/DocsLayout';
import usePageTitle from '../../hooks/usePageTitle';

export default function UserGuide() {
  usePageTitle('User Guide');

  return (
    <DocsLayout>
      <article className="prose">
        <h1>User Guide Samples</h1>
        <p>
          End-user documentation that helps customers complete tasks, adopt
          product features, and resolve common issues.
        </p>

        <h2>Samples</h2>

        <h3>Sample 1: Product Quick Start Guide</h3>
        <p>
          <em>
            Add your quick start guide sample here — include a brief summary and
            link or embedded content.
          </em>
        </p>

        <h3>Sample 2: Feature Walkthrough</h3>
        <p>
          <em>
            Add a task-based user guide sample that walks users through a key
            product workflow.
          </em>
        </p>

        <h3>Sample 3: Troubleshooting Guide</h3>
        <p>
          <em>
            Add a user-facing troubleshooting sample covering common issues and
            resolutions.
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

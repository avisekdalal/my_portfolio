import {Link} from 'react-router-dom';
import DocsLayout from '../../components/DocsLayout';
import usePageTitle from '../../hooks/usePageTitle';

export default function ApiDocumentation() {
  usePageTitle('API Documentation');

  return (
    <DocsLayout>
      <article className="prose">
        <h1>API Documentation Samples</h1>
        <p>
          Developer-facing content that explains endpoints, authentication,
          request/response formats, and integration workflows.
        </p>

        <h2>Samples</h2>

        <h3>Sample 1: REST API Reference</h3>
        <p>
          <em>
            Add an API reference sample — endpoint descriptions, parameters, and
            example requests.
          </em>
        </p>

        <h3>Sample 2: SDK Integration Guide</h3>
        <p>
          <em>
            Add a developer guide sample showing how to integrate with your
            product using an SDK.
          </em>
        </p>

        <h3>Sample 3: Authentication & Authorization</h3>
        <p>
          <em>
            Add a sample covering API keys, OAuth, or other auth patterns for
            developers.
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

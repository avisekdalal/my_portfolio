import {Link} from 'react-router-dom';
import DocsLayout from '../../components/DocsLayout';
import usePageTitle from '../../hooks/usePageTitle';

export default function WhitePapers() {
  usePageTitle('White Papers');

  return (
    <DocsLayout>
      <article className="prose">
        <h1>White Paper Samples</h1>
        <p>
          In-depth technical and strategic content that explains complex
          concepts, product architecture, and business value to technical and
          executive audiences.
        </p>

        <h2>Samples</h2>

        <h3>Sample 1: Solution Overview</h3>
        <p>
          <em>
            Add a white paper sample that presents a product solution and its
            business impact.
          </em>
        </p>

        <h3>Sample 2: Technical Architecture Brief</h3>
        <p>
          <em>
            Add a sample explaining system architecture, design decisions, and
            scalability considerations.
          </em>
        </p>

        <h3>Sample 3: Industry Thought Leadership</h3>
        <p>
          <em>
            Add a sample addressing industry trends, challenges, and how your
            approach solves them.
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

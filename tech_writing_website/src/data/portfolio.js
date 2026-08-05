export const portfolioCategories = [
  {
    slug: 'user-guide',
    title: 'User Guide',
    description:
      'End-user documentation focused on task completion, onboarding, and software feature adoption.',
    intro:
      'End-user documentation that helps customers complete tasks, adopt product features, and resolve common issues.',
    samples: [
      {
        title: 'Product Quick Start Guide',
        body: 'Add your quick start guide sample here — include a brief summary and link or embedded content.',
      },
      {
        title: 'Feature Walkthrough',
        body: 'Add a task-based user guide sample that walks users through a key product workflow.',
      },
      {
        title: 'Troubleshooting Guide',
        body: 'Add a user-facing troubleshooting sample covering common issues and resolutions.',
      },
    ],
  },
  {
    slug: 'api-documentation',
    title: 'API Documentation',
    description:
      'Developer-facing references featuring endpoints, authentication protocols, and request/response payloads.',
    intro:
      'Developer-facing content that explains endpoints, authentication, request/response formats, and integration workflows.',
    samples: [
      {
        title: 'REST API Reference',
        body: 'Add an API reference sample — endpoint descriptions, parameters, and example requests.',
      },
      {
        title: 'SDK Integration Guide',
        body: 'Add a developer guide sample showing how to integrate with your product using an SDK.',
      },
      {
        title: 'Authentication & Authorization',
        body: 'Add a sample covering API keys, OAuth, or other auth patterns for developers.',
      },
    ],
  },
  {
    slug: 'installation-manuals',
    title: 'Installation Guides',
    description:
      'Step-by-step system setup instructions covering dependencies, environment configuration, and deployment.',
    intro:
      'Setup and deployment documentation covering system requirements, installation steps, configuration, and post-install verification.',
    samples: [
      {
        title: 'On-Premises Installation Guide',
        body: 'Add an installation manual sample covering prerequisites, installation steps, and verification.',
      },
      {
        title: 'Cloud Deployment Guide',
        body: 'Add a sample for deploying and configuring the product in a cloud environment.',
      },
      {
        title: 'Upgrade & Migration Guide',
        body: 'Add a sample documenting upgrade paths, migration steps, and rollback procedures.',
      },
    ],
  },
  {
    slug: 'white-papers',
    title: 'White Papers',
    description:
      'In-depth technical topics exploring technical writing concepts, methodologies, and emerging technologies.',
    intro:
      'In-depth technical and strategic content that explains complex concepts, product architecture, and business value to technical and executive audiences.',
    samples: [
      {
        title: 'Solution Overview',
        body: 'Add a white paper sample that presents a product solution and its business impact.',
      },
      {
        title: 'Technical Architecture Brief',
        body: 'Add a sample explaining system architecture, design decisions, and scalability considerations.',
      },
      {
        title: 'Industry Thought Leadership',
        body: 'Add a sample addressing industry trends, challenges, and how your approach solves them.',
      },
    ],
  },
];

export function getCategoryBySlug(slug) {
  return portfolioCategories.find((category) => category.slug === slug);
}

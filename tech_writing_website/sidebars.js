// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Portfolio Home',
    },
    {
      type: 'category',
      label: 'Work Samples',
      collapsed: false,
      items: [
        'user-guide/index',
        'api-documentation/index',
        'installation-manuals/index',
        'white-papers/index',
      ],
    },
  ],
};

export default sidebars;

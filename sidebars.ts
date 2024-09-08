import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
        title: "Getting Started",
        slug: "getting-started",
      },
      items: ["getting-started/intro", "getting-started/command-syntax", "getting-started/dynamic-values"],
    },
    {
      type: "category",
      label: "Custom Commands",
      link: {
        type: "generated-index",
        title: "Custom Commands",
        slug: "custom-commands",
      },
      items: ["custom-commands/add"],
    },
    {
      type: "category",
      label: "Levels",
      link: {
        type: "generated-index",
        title: "Levels Commands",
        slug: "levels",
      },
      items: ["levels/enable", "levels/disable", "levels/set-message"],
    },
    {
      type: "category",
      label: "Deleting Your Data",
      link: {
        type: "generated-index",
        title: "Deleting Your Data",
        slug: "delete-my-data",
      },
      items: ["delete-my-data/guild", "delete-my-data/user", "delete-my-data/custom-commands", "delete-my-data/levels"],
    },
  ],
};

export default sidebars;

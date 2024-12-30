# Prism UI

Components and tools to help developers work more efficiently, and make applications more cohesive.

## Applications

### [Docs](./apps/docs/README.md)

Launches the developer documentation app and builds/serves the storybook server.

### [Home](./apps/home/README.md)

Provides a landing page and serves as a frontend path router and proxy via path rewrites.

### [Screenplay](./apps/screenplay/README.md)

E2E test framework utilizing the [Screenplay pattern](https://serenity-js.org/handbook/design/screenplay-pattern/).

## Libraries

### [Content](./content/README.md)

Static content assets, including fonts, images, and markdown pages.

### [Theme](./libs/theme/README.md)

Global theme styles and design tokens.

### [Presets](./libs/presets/README.md) (coming soon)

PostCSS, Tailwind, ESLint, Stylelint, Prettier, and Typescript presets.

## Getting started

This project is built and run using Nx. Nx is a powerful open-source build system that provides tools and techniques for enhancing developer productivity, optimizing CI performance, and maintaining code quality. Check out the [intro video](https://nx.dev/getting-started/why-nx) to learn more about what Nx is about.

## Launch the application in dev mode

To launch the dev server run `yarn start` or:

```sh
nx run-many -t serve -p docs home
```

To create a production bundle run `yarn build`.

To see all available targets to run for a project, run:

```sh
nx show project home
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
nx g @nx/next:app demo
```

To generate a new library, use:

```sh
nx g @nx/react:lib mylib
```

You can use `nx list` to get a list of installed plugins. Then, run `nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/next?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## TODO

### Checkout dependency resolution warnings

> YN0002: │ @apsphysics/prism-ui@workspace:. doesn't provide @typescript-eslint/parser (pc3b85), requested by @nx/eslint-plugin and other dependencies.

> YN0002: │ @apsphysics/prism-ui@workspace:. doesn't provide playwright-core (pdfa7b), requested by @serenity-js/playwright.

> YN0002: │ @apsphysics/prism-ui@workspace:. doesn't provide react-syntax-highlighter (pb6412), requested by @whitespace/storybook-addon-html.

> YN0002: │ @apsphysics/prism-ui@workspace:. doesn't provide webpack (pd6de4), requested by swc-loader.

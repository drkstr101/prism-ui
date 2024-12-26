---
title: Getting started
---

{% quick-links %}

{% quick-link title="Quick start" icon="installation" href="/" description="Learn how to get PrismUI set up in your project in under thirty minutes or it's free." /%}

{% quick-link title="Core concepts" icon="presets" href="/docs/design-tokens" description="Learn the fundamentals and basic design theory." /%}

{% quick-link title="Advanced guides" icon="plugins" href="/docs/preact-guide" description="Setup additional frameworks and tooling for your project." /%}

{% quick-link title="Component reference" icon="theming" href="/" description="Browse available components and copy design snippets." /%}

{% /quick-links %}

---

## Quick start

Follow these steps to get up and running quickly with Prism UI in your Rails application.

### Install Vite

Add the `vite_rails` gem and run the vite installer.

```shell
bin/bundle add vite_rails
bin/bundle exec vite install --package-manager yarn
```

```jsonc
// config/vite.json
{
  "all": {
    "base": "/People",
    "sourceCodeDir": "app/frontend",
    "watchAdditionalPaths": [],
  },
  "development": {
    "autoBuild": true,
    "publicOutputDir": "vite-dev",
    "port": 3036,
  },
  "test": {
    "autoBuild": true,
    "publicOutputDir": "vite-test",
    "port": 3037,
  },
}
```

{% callout type="warning" title="Relocate entrypoints" %}

If your application was already configured to bundle JavaScript we will need to update the default entry point to point to `app/frontend` and add any base path, if needed.

Be sure to relocate the entrypoints directory to this new location.

Example:

```shell
mkdir app/frontend
mv app/javascript/entrypoints app/frontend
```

{% /callout %}

### Create links to other projects

We need to define some path aliases using the gem path in order for Vite to correctly resolve imports to other projects. You will most likely at least need the following two definitions, and possibly others depending on your project.

```ruby
# config/vite.rb
# frozen_string_literal: true

ViteRuby.env['EOP_RAILS3_ASSETS_PATH'] =
  "#{Gem.loaded_specs['eop_rails3-devel'].full_gem_path}/app/frontend"

ViteRuby.env['EOP_RAILS_INTERNAL_ASSETS_PATH'] =
  "#{Gem.loaded_specs['eop_rails_internal-devel'].full_gem_path}/app/frontend"
```

#### Example usage

Update your `vite.config.ts` to read in these environment variables to define path aliases and other features.

```ts
//vite.config.ts
// import viteReact from '@vitejs/plugin-react';
import { join } from 'path';
import { defineConfig, type UserConfig } from 'vite';
import viteRails from 'vite-plugin-rails';

const eopRails3 = process.env.EOP_RAILS3_ASSETS_PATH ?? join(__dirname, '../eop_rails3');

const eopRailsInternal =
  process.env.EOP_RAILS_INTERNAL_ASSETS_PATH ?? join(__dirname, '../eop_rails_internal');

export default {
  plugins: [
    viteRails({
      fullReload: {
        // Enable hot module reloading on dependency paths
        additionalPaths: [`${eopRails3}/**/*`, `${eopRailsInternal}/**/*`],
      },
    }),
    // Uncomment to add React support
    // viteReact(),
  ],
  // Import from arbitrary paths.
  resolve: {
    alias: {
      '@eop_rails3/': `${eopRails3}/`,
      '@eop_rails_internal/': `${eopRailsInternal}/`,
    },
  },
  server: {
    fs: {
      // Allow file access to gem internals
      allow: [eopRails3, eopRailsInternal!],
    },
  },
} satisfies UserConfig;
```

### Setup PostCSS/Tailwind

Next we will need to setup PostCSS and Tailwind. **Correctly configuring PostCSS is crucial** for getting a variety of frameworks (IE. Vite, NextJs, Storybook, etc.) to all agree on a common feature-set and baseline supported CSS3 syntax.

{% callout type="danger" title="Configure PostCSS" %}

Failing to correctly configure PostCSS may result in subtle design bugs that are difficult to notice at a glance.

{% /callout %}

```js
// postcss.config.js
const { join } = require('path');

// Note: If you use library-specific PostCSS/Tailwind configuration then you should remove the `postcssConfig` build
// option from your application's configuration (i.e. project.json).
//
// See: https://nx.dev/guides/using-tailwind-css-in-react#step-4:-applying-configuration-to-libraries

module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      // or tailwind.config.js by preference
      // absolute paths required for monorepo support
      config: join(__dirname, 'tailwind.config.ts'),
    },
    autoprefixer: {},
  },
};
```

Next to your `postcss.config.js` file create a `tailwind.config.ts` with the following contents:

```ts
// tailwind.config.ts
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import { type Config } from 'tailwindcss';

module.exports = {
  content: [
    join(
      __dirname,
      'app/helpers/**/*.rb',
      'app/views/**/*.erb',
      'app/views/**/*.haml',
      'app/frontend/**/*!(*.spec).{cjs,mjs,js,jsx,ts,tsx,md,mdx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  presets: [require('@apsphysics/prism-ui.tailwind-presets')],
} satisfies Config;
```

### Import global styles

Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.

```tsx
import '@apsphysics/prism-ui.theme/styles.css'

{% callout title="You should know!" %}

{% /callout %}

---

## Basic usage

Praesentium laudantium magni. Consequatur reiciendis aliquid nihil iusto ut in et. Quisquam ut et aliquid occaecati. Culpa veniam aut et voluptates amet perspiciatis. Qui exercitationem in qui. Vel qui dignissimos sit quae distinctio.

### Your first cache

Minima vel non iste debitis. Consequatur repudiandae et quod accusamus sit molestias consequatur aperiam. Et sequi ipsa eum voluptatibus ipsam. Et quisquam ut.

Qui quae esse aspernatur fugit possimus. Quam sed molestiae temporibus. Eum perferendis dignissimos provident ea et. Et repudiandae quasi accusamus consequatur dolore nobis. Quia reiciendis necessitatibus a blanditiis iste quia. Ut quis et amet praesentium sapiente.

Atque eos laudantium. Optio odit aspernatur consequuntur corporis soluta quidem sunt aut doloribus. Laudantium assumenda commodi.

### Clearing the cache

Vel aut velit sit dolor aut suscipit at veritatis voluptas. Laudantium tempore praesentium. Qui ut voluptatem.

Ea est autem fugiat velit esse a alias earum. Dolore non amet soluta eos libero est. Consequatur qui aliquam qui odit eligendi ut impedit illo dignissimos.

Ut dolore qui aut nam. Natus temporibus nisi voluptatum labore est ex error vel officia. Vero repellendus ut. Suscipit voluptate et placeat. Eius quo corporis ab et consequatur quisquam. Nihil officia facere dolorem occaecati alias deleniti deleniti in.

### Adding middleware

Officia nobis tempora maiores id iusto magni reprehenderit velit. Quae dolores inventore molestiae perspiciatis aut. Quis sequi officia quasi rem officiis officiis. Nesciunt ut cupiditate. Sunt aliquid explicabo enim ipsa eum recusandae. Vitae sunt eligendi et non beatae minima aut.

Harum perferendis aut qui quibusdam tempore laboriosam voluptatum qui sed. Amet error amet totam exercitationem aut corporis accusantium dolorum. Perspiciatis aut animi et. Sed unde error ut aut rerum.

Ut quo libero aperiam mollitia est repudiandae quaerat corrupti explicabo. Voluptas accusantium sed et doloribus voluptatem fugiat a mollitia. Numquam est magnam dolorem asperiores fugiat. Soluta et fuga amet alias temporibus quasi velit. Laudantium voluptatum perspiciatis doloribus quasi facere. Eveniet deleniti veniam et quia veritatis minus veniam perspiciatis.

---

## Getting help

Consequuntur et aut quisquam et qui consequatur eligendi. Necessitatibus dolorem sit. Excepturi cumque quibusdam soluta ullam rerum voluptatibus. Porro illo sequi consequatur nisi numquam nisi autem. Ut necessitatibus aut. Veniam ipsa voluptatem sed.

### Submit an issue

Inventore et aut minus ut voluptatem nihil commodi doloribus consequatur. Facilis perferendis nihil sit aut aspernatur iure ut dolores et. Aspernatur odit dignissimos. Aut qui est sint sint.

Facere aliquam qui. Dolorem officia ipsam adipisci qui molestiae. Error voluptatem reprehenderit ex.

Consequatur enim quia maiores aperiam et ipsum dicta. Quam ut sit facere sit quae. Eligendi veritatis aut ut veritatis iste ut adipisci illo.

### Join the community

Praesentium facilis iste aliquid quo quia a excepturi. Fuga reprehenderit illo sequi voluptatem voluptatem omnis. Id quia consequatur rerum consectetur eligendi et omnis. Voluptates iusto labore possimus provident praesentium id vel harum quisquam. Voluptatem provident corrupti.

Eum et ut. Qui facilis est ipsa. Non facere quia sequi commodi autem. Dicta autem sit sequi omnis impedit. Eligendi amet dolorum magnam repudiandae in a.

Molestiae iusto ut exercitationem dolorem unde iusto tempora atque nihil. Voluptatem velit facere laboriosam nobis ea. Consequatur rerum velit ipsum ipsam. Et qui saepe consequatur minima laborum tempore voluptatum et. Quia eveniet eaque sequi consequatur nihil eos.
```

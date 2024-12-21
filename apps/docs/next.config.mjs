//@ts-check

//@ts-ignore
import withMarkdoc from '@markdoc/next.js';
import { withNx } from '@nx/next';
import withSearch from './src/markdoc/search.mjs';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  rewrites: async () => {
    return [
      // Rewrite to Storybook
      // TODO: - This isn't working. Deploy to a secondary host and forward to that.
      {
        source: '/storybook',
        destination: '/storybook/index.html',
      },
    ];
  },
};

// const plugins = [
//   // Add more Next.js plugins to this list if needed.
//   withNx,
// ];

export default withNx(withSearch(withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig)));

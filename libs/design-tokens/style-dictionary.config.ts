import type { Config } from 'style-dictionary';
import * as styleDictionary from 'style-dictionary';
import {
  AttributeSetsTransform,
  CSSOpenTypeTransform,
  CSSSetsFormatter,
  NameKebabTransfom,
} from 'style-dictionary-sets';

import generateFileConfig from './src/util/generate-file-config';

const setNames = ['desktop', 'mobile', 'light', 'dark', 'wireframe'];

styleDictionary.registerTransform(CSSOpenTypeTransform);
styleDictionary.registerTransform(NameKebabTransfom);
styleDictionary.registerTransform(AttributeSetsTransform);
styleDictionary.registerFormat(CSSSetsFormatter);

// If you need to add multiple configutations Config[] is supported
const config: Config | Config[] = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'css/',
      transforms: [
        AttributeSetsTransform.name,
        NameKebabTransfom.name,
        CSSOpenTypeTransform.name,
      ],
      prefix: 'prism',
      files: [
        generateFileConfig(),
        ...['internal', 'external'].map((subSystemName) => generateFileConfig({ subSystemName })),
        ...setNames.map((context) => generateFileConfig({ setName: context })),
        ...setNames.map((context) =>
          generateFileConfig({
            setName: context,
            subSystemName: 'internal',
          })
        ),
        ...setNames.map((context) =>
          generateFileConfig({
            setName: context,
            subSystemName: 'external',
          })
        ),
      ],
    },
  },
};

export default config;

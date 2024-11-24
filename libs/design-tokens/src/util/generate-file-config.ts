type Opts = { setName?: string; subSystemName?: string };

const baseConfig = {
  format: 'css/sets',
  options: {
    showFileHeader: false,
    outputReferences: true,
  },
};

export default function generateFileConfig({ setName, subSystemName }: Opts = {}) {
  const sets = [setName, subSystemName].filter(Boolean);
  if (!sets.length) {
    return {
      ...baseConfig,
      destination: 'global-vars.css',
      filter: (token) => !token.path.includes('sets'),
      options: {
        ...baseConfig.options,
        selector: '.prism',
      },
    };
  }

  const isGlobal = !setName;
  const isPrism = subSystemName && subSystemName === 'prism';

  let selector = '';
  if (isGlobal || (subSystemName && !isPrism)) {
    // postfix the selector with the subsystem name
    selector = `.prism${subSystemName && !isPrism ? `--${subSystemName}` : ''}`;
  }

  let scope =
    {
      desktop: 'medium',
      mobile: 'large',
    }[setName] ?? setName;

  if (isGlobal) scope = 'global';
  else if (setName && scope) {
    selector += `.prism--${scope}`;
  }

  const selectors = [
    selector ?? null,
    //   // Apply all light colors as lightest for backwards compat
    //   // @todo does this need a deprecation notice?
    //   setName === 'light' ? selector.replace('light', 'lightest') : null,
  ].filter(Boolean);

  const getSets = (token) => token.path.filter((_, idx, array) => array[idx - 1] == 'sets');

  function filter(token) {
    // Fetch the sets for this token
    const tokenSets = getSets(token);

    // if (tokenSets.includes('wireframe')) return false;

    if (!setName) {
      if (!subSystemName && tokenSets.length === 0) {
        return true;
      }

      if (subSystemName && tokenSets.length === 1 && tokenSets.includes(subSystemName)) {
        return true;
      }
    } else {
      if (!tokenSets.includes(setName)) return false;

      if (!subSystemName && tokenSets.length === 1) {
        return true;
      }

      if (subSystemName && tokenSets.length === 2 && tokenSets.includes(subSystemName)) {
        return true;
      }
    }

    return false;
  }

  return {
    ...baseConfig,
    destination: `${subSystemName ? `${subSystemName}/` : ''}${scope}-vars.css`,
    filter,
    options: {
      ...baseConfig.options,
      selector: selectors.join(', '),
      sets,
    },
  };
}

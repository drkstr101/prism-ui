import { TokenViewer } from '@bitdesign/sparks.sparks-theme';
import React from 'react';
import { useTheme } from './prism-theme-provider.js';
import { PrismTheme } from './prism-theme.js';

const ShowTokens = () => {
  const theme = useTheme();
  return <TokenViewer theme={theme} />;
};

export const BasicPrismTheme = () => {
  return (
    <PrismTheme>
      <ShowTokens />
    </PrismTheme>
  );
};

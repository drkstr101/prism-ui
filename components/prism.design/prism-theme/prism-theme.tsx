import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { PrismThemeProvider } from './prism-theme-provider.js';

import styles from './prism-theme.module.scss';

export type PrismThemeProps = {
  /**
   * a root ReactNode for the component tree
   * applied with the theme.
   */
  children?: ReactNode;
  /**
   * inject a class name to override to the theme.
   * this allows people to affect your theme. remove to avoid.
   */
  className?: string;
};

/**
 * a theme for the Acme organization.
 * it provides tokens, fonts and general styling for all components.
 */
export function PrismTheme({ children, className, ...rest }: PrismThemeProps) {
  return (
    <PrismThemeProvider.ThemeProvider
      {...rest}
      className={classNames(styles.prismTheme, className)}
    >
      {children}
    </PrismThemeProvider.ThemeProvider>
  );
}

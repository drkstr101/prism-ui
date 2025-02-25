import type { ReactNode, ComponentType } from 'react';
import { Logo } from '@bitdesign/sparks.content.logo';
import classNames from 'classnames';
import { Link } from '@bitdesign/sparks.navigation.link';
import { Header as SparksHeader } from '@bitdesign/sparks.layout.header';
import { HeaderLink } from './header-link.js';
import styles from './header.module.scss';

export type HeaderProps = {
  /**
   * name of the brand
   */
  name?: string;

  /**
   * slogan of the brand.
   */
  slogan?: string;

  /**
   * sets the component children.
   */
  children?: ReactNode;

  /**
   * list of header links.
   */
  links?: HeaderLink[];

  /**
   * list of actions.
   */
  actions?: ComponentType[];

  /**
   * override class names.
   */
  className?: string;

  /**
   * image of the logo
   */
  logoImage?: string;
};

export function Header({
  children,
  logoImage = 'https://static.bit.dev/extensions-icons/pied-piper.svg',
  name = 'Pied Piper',
  slogan = 'Networks',
  className,
  actions,
  links = [],
}: HeaderProps) {
  const logo = <Logo href="/" name={name} slogan={slogan} src={logoImage} />;

  return (
    <SparksHeader
      logo={logo}
      actions={actions}
      className={classNames(className, styles.header)}
      actionsClassName={styles.actions}
    >
      {children}
      {links.map((link, key) => {
        return <Link key={key} href={link.href} external={link.external}>{link.label}</Link>;
      })}
    </SparksHeader>
  );
}

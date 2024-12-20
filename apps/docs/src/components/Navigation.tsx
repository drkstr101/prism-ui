import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navigation } from '../lib/navigation';

export function Navigation({
  className,
  onLinkClick,
}: {
  className?: string;
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const pathname = usePathname();

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-heading text-neutral-content font-medium dark:text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-gray-100 lg:mt-4 lg:space-y-4 lg:border-gray-200 dark:border-gray-800"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    onClick={onLinkClick}
                    className={clsx(
                      'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                      link.href === pathname
                        ? 'text-neutral-content font-bold'
                        : 'text-neutral-subdued-content hover:text-neutral-subdued-content-hover before:hidden before:bg-gray-300 hover:font-medium hover:before:block dark:text-gray-400 dark:before:bg-gray-700 dark:hover:text-gray-300'
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

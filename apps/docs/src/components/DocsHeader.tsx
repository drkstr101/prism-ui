'use client';

import { usePathname } from 'next/navigation';

import { navigation } from '../lib/navigation';

export function DocsHeader({ title }: { title?: string }) {
  const pathname = usePathname();
  const section = navigation.find((section) =>
    section.links.find((link) => link.href === pathname)
  );

  if (!title && !section) {
    return null;
  }

  return (
    <header className="mb-9 space-y-1">
      {section && (
        <p className="font-display text-neutral-subdued-content text-sm font-medium">
          {section.title}
        </p>
      )}
      {title && (
        <h1 className="font-display text-neutral-content text-3xl tracking-tight dark:text-white">
          {title}
        </h1>
      )}
    </header>
  );
}

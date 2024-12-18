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
        <p className="text-neutral-subdued-content text-sm font-semibold">{section.title}</p>
      )}
      {title && (
        <h1 className="text-neutral-content text-3xl font-bold tracking-tight dark:text-white">
          {title}
        </h1>
      )}
    </header>
  );
}

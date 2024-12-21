import Link from 'next/link';

import { Icon } from './Icon';

export function QuickLinks({ children }: { children: React.ReactNode }) {
  return <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">{children}</div>;
}

export function QuickLink({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentProps<typeof Icon>['icon'];
}) {
  return (
    <div className="group relative rounded-md border border-gray-200">
      <div className="absolute -inset-px rounded-md border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.blue.50)),var(--quick-links-hover-bg,theme(colors.blue.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.blue.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.800)]" />
      <div className="relative overflow-hidden rounded-md p-6">
        <Icon icon={icon} className="h-8 w-8" />
        <h4 className="heading heading--sm mt-4">
          <Link href={href}>
            <span className="absolute -inset-px rounded-md" />
            {title}
          </Link>
        </h4>
        <p className="mt-1 text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}

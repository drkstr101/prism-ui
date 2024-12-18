import clsx from 'clsx';

export function Prose<T extends React.ElementType = 'div'>({
  as,
  className,
  ...props
}: React.ComponentPropsWithoutRef<T> & {
  as?: T;
}) {
  const Component = as ?? 'div';

  return (
    <Component
      className={clsx(
        className,
        'prose prose-gray max-w-none',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-medium prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-gray-500',
        // links
        'prose-a:font-medium',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.blue.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.blue.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.gray.900)]',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-gray-900 prose-pre:shadow-lg'
        // hr
        // 'dark:prose-hr:border-gray-800'
      )}
      {...props}
    />
  );
}

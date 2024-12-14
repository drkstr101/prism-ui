import clsx from 'clsx';
import Link from 'next/link';

const variantStyles = {
  primary:
    'rounded-full bg-blue-300 py-2 px-4 text-sm font-semibold text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300/50 active:bg-blue-500',
  secondary:
    'rounded-full bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-gray-400',
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
);

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  className = clsx(variantStyles[variant], className);

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}

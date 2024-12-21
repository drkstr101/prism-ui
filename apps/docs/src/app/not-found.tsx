import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <p className="font-heading text-sm font-medium text-gray-900">404</p>
        <h1 className="font-heading mt-3 text-3xl tracking-tight text-gray-900">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link href="/" className="mt-8 text-sm font-medium text-gray-900">
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default function DocsHero({ title = 'Prism UI' }: { title?: string }) {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="bg-accent-500/10 text-accent-400 ring-accent-500/20 rounded-full px-3 py-1 text-sm/6 font-semibold ring-1 ring-inset">
                What&apos;s new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-500">
                <span className="font-code">v0.0.1</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 0 18 18"
                  width="18"
                  aria-hidden="true"
                  className="size-5 text-gray-500"
                >
                  <title>S ChevronRight 18 N</title>
                  <rect id="Canvas" fill="currentColor" opacity="0" width="18" height="18" />
                  <path d="M12,9a.994.994,0,0,1-.2925.7045l-3.9915,3.99a1,1,0,1,1-1.4355-1.386l.0245-.0245L9.5905,9,6.3045,5.715A1,1,0,0,1,7.691,4.28l.0245.0245,3.9915,3.99A.994.994,0,0,1,12,9Z" />
                </svg>
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-black sm:text-7xl">
            {title}
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
            Components and tools to help developers work more efficiently, and make applications
            more cohesive.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="bg-accent-500 hover:bg-accent-400 focus-visible:outline-accent-400 rounded-md px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-black">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              alt="App screenshot"
              src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-black/5 shadow-2xl ring-1 ring-black/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

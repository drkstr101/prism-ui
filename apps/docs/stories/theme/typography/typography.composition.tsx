import { HtmlHTMLAttributes } from 'react';

export type Props = HtmlHTMLAttributes<HTMLDivElement>;

const Container = ({ children, ...props }: Props) => (
  <div {...props}>
    <div className="px-4 py-5 sm:p-6">{children}</div>
  </div>
);

export const TypographyComposition = (props: Props) => (
  <Container {...props}>
    <main className="typography">
      <header>
        <label className="detail">Detail</label>
        <h1>Top level title</h1>
        <hr />
        <p className="lead">
          Culpa cupidatat voluptate occaecat quis dolore sunt dolore eu occaecat ipsum non quis
          laborum qui. Nulla sint consectetur laborum duis aliqua dolor qui aliquip excepteur
          tempor.
        </p>
      </header>
      <section aria-labelledby="section-hero-title">
        <h2 id="section-hero-title">Section title</h2>
        <hr />
        <h3>Level 3 header</h3>
        <h4>
          Level 4 header{' '}
          <strong>
            with a <em>very long</em>
          </strong>{' '}
          <em>title</em> nisi cillum enim tempor fugiat enim elit nisi laborum.
        </h4>
        <h5>Level 5 sit commodo laboris non sunt deserunt non.</h5>
        <h6>Level 6 esse eiusmod pariatur ea nulla culpa quis.</h6>
        <p>
          Elit esse ea enim non consectetur. Irure anim laborum consectetur aliqua quis anim id
          Lorem minim. <a href="#">Non aliqua</a> dolor sunt deserunt do irure aliqua consequat
          incididunt ipsum laboris veniam aute cillum. Labore minim occaecat aliquip fugiat. Sint
          esse sint ea officia reprehenderit ex duis fugiat pariatur. Commodo adipisicing elit
          nostrud velit adipisicing reprehenderit nisi. Velit aute ipsum velit irure laborum
          incididunt.
        </p>
      </section>
      <section aria-labelledby="section-common-elements-title">
        <h2 id="section-common-elements-title">
          Common <code>elements</code>
        </h2>
        <hr />
        <ul>
          <li>Dolore anim incididunt excepteur tempor fugiat laboris occaecat nisi est.</li>
          <li>
            Ullamco laboris ea dolore cupidatat qui consequat consequat dolor exercitation in.
          </li>
          <li>Ullamco nostrud ad consectetur laborum deserunt enim deserunt exercitation.</li>
        </ul>
        <h3>Sint ea officia reprehenderit</h3>
        <ol>
          <li>Sit nisi ut amet et aliquip aliqua.</li>
          <li>Anim laborum labore sint velit eu commodo.</li>
          <li>Veniam sit do do aliqua eu.</li>
        </ol>
        <h4>In officia et laborum do aliqua aute nulla.</h4>
        <h5>Enim ullamco adipisicing deserunt incididunt sit eu.</h5>
        <blockquote>
          Id culpa tempor ut esse aliquip aute ut irure deserunt. Adipisicing labore ullamco
          deserunt sit incididunt minim consequat incididunt aliquip. Veniam esse consectetur
          pariatur non laborum ad qui fugiat id mollit Lorem. Proident ea sint incididunt veniam.
          Non minim quis fugiat aliquip elit officia. Id duis sit exercitation culpa ipsum tempor
          velit consequat et qui minim.
        </blockquote>
        <h6>Sit nostrud quis ullamco ad nisi fugiat ut consequat.</h6>
        <pre>
          <code>
            {`import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import { type Config } from 'tailwindcss';

export default {
  content: [
    join(__dirname, '**/*!(*.spec).{js,jsx,ts,tsx,md,mdx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  theme: {
    extend: {},
  },
  presets: [require('../../tailwind-workspace-presets.js')],
} satisfies Config;`}
          </code>
        </pre>
      </section>
      <footer>
        <h2>Footer</h2>
        <hr />
        <ul>
          <li>
            <a href="#">
              Aute anim labore exercitation proident do veniam cupidatat qui esse elit qui.
            </a>
          </li>
          <li>
            <a href="#">Voluptate ex pariatur ullamco eu exercitation.</a>
          </li>
          <li>
            <a href="#">Officia sunt aliqua duis aute est.</a>
          </li>
        </ul>
      </footer>
    </main>
  </Container>
);

export const HeadingComposition = (props: Props) => (
  <Container {...props}>
    <div className="heading heading--3xl">Heading (3xl)</div>
    <div className="heading heading--2xl">Heading (2xl)</div>
    <div className="heading heading--xl">Heading (xl)</div>
    <div className="heading heading--lg">Heading (lg)</div>
    <div className="heading heading--md">Heading (md)</div>
    <div className="heading heading--sm">Heading (sm)</div>
    <div className="heading heading--xs">Heading (xs)</div>
    <div className="heading heading--2xs">Heading (2xs)</div>
  </Container>
);

export const BodyComposition = (props: Props) => (
  <Container {...props}>
    <div className="body body--3xl">Body (3xl)</div>
    <div className="body body--2xl">Body (2xl)</div>
    <div className="body body--xl">Body (xl)</div>
    <div className="body body--lg">Body (lg)</div>
    <div className="body body--md">Body (md)</div>
    <div className="body body--sm">Body (sm)</div>
    <div className="body body--xs">Body (xs)</div>
  </Container>
);

export const DetailComposition = (props: Props) => (
  <Container {...props}>
    <div className="detail detail--xl">Detail (xl)</div>
    <div className="detail detail--lg">Detail (lg)</div>
    <div className="detail detail--md">Detail (md)</div>
    <div className="detail detail--sm">Detail (sm)</div>
  </Container>
);

export const CodeComposition = (props: Props) => (
  <Container {...props}>
    <div className="code code--xl">Code (xl)</div>
    <div className="code code--lg">Code (lg)</div>
    <div className="code code--md">Code (md)</div>
    <div className="code code--sm">Code (sm)</div>
    <div className="code code--xs">Code (xs)</div>
  </Container>
);

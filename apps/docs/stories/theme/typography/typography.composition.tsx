import { HtmlHTMLAttributes } from 'react';

export type Props = HtmlHTMLAttributes<HTMLDivElement>;

export const TypographyComposition = (props: Props) => (
    <section className="prose font-sans" {...props}>
      <h1>Phasellus maximus venenatis suscipit</h1>
      <p>
        Maecenas a dolor sed massa dignissim molestie. Sed nec hendrerit purus, sed cursus nisi.
        Vivamus sit amet tortor dapibus, lacinia tortor eget, efficitur sem.{' '}
      </p>
      <label>Detail</label>
      <em>
        <code>{"console.log('Hello, World!')"}</code>
      </em>
    </section>
  );

export const HeadingComposition = (props: Props) => (
    <div {...props}>
      <div className="heading heading--3xl">Heading (3xl)</div>
      <div className="heading heading--2xl">Heading (2xl)</div>
      <div className="heading heading--xl">Heading (xl)</div>
      <div className="heading heading--lg">Heading (lg)</div>
      <div className="heading heading--md">Heading (md)</div>
      <div className="heading heading--sm">Heading (sm)</div>
      <div className="heading heading--xs">Heading (xs)</div>
      <div className="heading heading--2xs">Heading (2xs)</div>
    </div>
  )

export const BodyComposition = (props: Props) => (
    <div {...props}>
      <div className="body body--3xl">Body (3xl)</div>
      <div className="body body--2xl">Body (2xl)</div>
      <div className="body body--xl">Body (xl)</div>
      <div className="body body--lg">Body (lg)</div>
      <div className="body body--md">Body (md)</div>
      <div className="body body--sm">Body (sm)</div>
      <div className="body body--xs">Body (xs)</div>
    </div>
  )

export const DetailComposition = (props: Props) => (
    <div {...props}>
      <div className="detail detail--xl">Detail (xl)</div>
      <div className="detail detail--lg">Detail (lg)</div>
      <div className="detail detail--md">Detail (md)</div>
      <div className="detail detail--sm">Detail (sm)</div>
    </div>
  )


export const CodeComposition = (props: Props) => (
    <div {...props}>
      <div className="code code--xl">Code (xl)</div>
      <div className="code code--lg">Code (lg)</div>
      <div className="code code--md">Code (md)</div>
      <div className="code code--sm">Code (sm)</div>
      <div className="code code--xs">Code (xs)</div>
    </div>
  )

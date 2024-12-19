import { ReactNode } from 'react';

export interface CompositionProps {
  children?: ReactNode;
}

export function TypographyComposition() {
  return (
    <section className="typography">
      <label className="detail">Detail</label>
      <h1 className="heading">Phasellus maximus venenatis suscipit</h1>
      <p className="body">
        Maecenas a dolor sed massa dignissim molestie. Sed nec hendrerit purus, sed cursus nisi.
        Vivamus sit amet tortor dapibus, lacinia tortor eget, efficitur sem.{' '}
      </p>
      <div className="code">{"console.log('Hello, World!')"}</div>
    </section>
  );
}

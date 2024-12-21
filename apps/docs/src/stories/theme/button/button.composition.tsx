import { HtmlHTMLAttributes } from 'react';

export type Props = HtmlHTMLAttributes<HTMLDivElement>;

export const Container = ({ children, ...props }: Props) => <div className="p-4">{children}</div>;

export const PrimaryComposition = (props: Props) => (
  <Container {...props}>
    <button className="button button--md button--fill button--accent" id="button-primary">
      <span className="button__label">Edit</span>
    </button>
  </Container>
);

import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import model, { type AppState } from './prism-app.model';

@customElement('prism-app')
export default class PrismApp extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static override styles = css`
    :host {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      overflow: hidden;
      background: var(--spectrum-gray-100);
      color: var(--spectrum-gray-900);
      font-family: var(--spectrum-sans-serif-font-family);
    }
  `;

  // Declare reactive properties
  @property({ type: Object }) appState: AppState = model.DEFAULT_STATE;

  // Render the UI as a function of component state
  override render() {
    return html`<article>
      <slot></slot>
    </article>`;
  }
}

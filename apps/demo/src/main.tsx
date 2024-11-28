import { PrismApp, registerComponent } from '@apsphysics/prism-ui.wc.registry';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

registerComponent('prism-app', PrismApp);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

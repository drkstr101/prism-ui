import PrismApp from './lib/prism-app';
import { registerComponent } from './lib/wc-registry';

// immediately register top-level entrypoint
registerComponent('prism-app', PrismApp);

import PrismApp from './lib/organisms/prism-app';
import { registerComponent } from './lib/wc-registry';

// immediately register element for top-level entrypoint
registerComponent('prism-app', PrismApp);

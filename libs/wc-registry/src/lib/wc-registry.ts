export interface ComponentInfo {
  name: string;
  component: CustomElementConstructor;
}

export function registerComponent(
  name: string,
  component: CustomElementConstructor,
  opts?: ElementDefinitionOptions
) {
  if (customElements.get(name)) return;

  console.log(`Registered custom element: ${name}`);
  customElements.define(name, component, opts);
}

// export default {
//   app: {
//     name: 'prism-app',
//     component: PrismApp,
//   },
// } as const;

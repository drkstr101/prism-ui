import tailwindPresets from './tailwind-presets';

describe('tailwindPresets', () => {
  it('should work', () => {
    expect(tailwindPresets.theme.extend.colors).to.have.keys(
      'accent',
      'background-base',
      'background-layer-1',
      'background-layer-2',
      'gray',
      'blue',
      'green',
      'informative',
      'negative',
      'neutral',
      'notice',
      'orange',
      'positive',
      'prism',
      'red',
      'yellow'
    );
  });
});

// const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'app/frontend/**/*!(*.stories|*.spec).{js,jsx,ts,tsx,html}'),
    join(__dirname, 'app/views/**/*.html.{erb,haml}'),
    join(__dirname, 'app/helpers/**/*.rb'),
    // ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('../../tailwind-workspace-presets.js')],
};

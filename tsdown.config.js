export { tsdownConfig as default }

/** @type {import('tsdown').UserConfig} */
const tsdownConfig = {
  entry: [
    './src/index.ts',

    ...[
      'animation-name',
      'aspect-ratio',
      'at-container',
      'at-media',
      'border-radius',
      'box-shadow',
      'color',
      'filter',
      'font-family',
      'font-feature-settings',
      'font-weight',
      'letter-spacing',
      'line-height',
      'perspective',
      'spacing',
      'text-shadow',
      'theme',
      'transition-timing-function',
      'width',
    ].map((name) => ({
      [`${name}.stylex`]: `./src/tokens/${name}.stylex.ts`,
    })),
  ],

  dts: {
    tsconfig: 'tsconfig.build.json',
  },

  fixedExtension: false,
}

//

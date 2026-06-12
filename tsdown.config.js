export { tsdownConfig as default }

/** @type {import('tsdown').UserConfig} */
const tsdownConfig = {
  entry: {
    index: './src/index.ts',
    'tokens/*': ['./src/tokens/*.ts', '!./src/tokens/*.spec.ts'],
    'utilities/*': ['./src/utilities/*.ts', '!./src/utilities/*.spec.ts'],
  },

  dts: {
    tsconfig: 'tsconfig.build.json',
  },

  deps: {
    onlyBundle: [],
  },

  fixedExtension: false,
}

//

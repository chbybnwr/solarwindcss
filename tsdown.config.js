export { tsdownConfig as default }

/** @type {import('tsdown').UserConfig} */
const tsdownConfig = {
  dts: {
    tsconfig: 'tsconfig.build.json',
  },

  minify: true,
  fixedExtension: false,
}

//

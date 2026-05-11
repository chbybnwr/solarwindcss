/// <reference types="vitest/config" />

export { vitestConfig as default }

/** @type {import('vite').UserConfig} */
const vitestConfig = {
  resolve: {
    alias: {
      '#': fileURLToPath(new URL('test-build/', import.meta.url)),
    },
  },

  test: {
    include: [
      '**/*.spec.{js,jsx,ts,tsx,mjs,mjsx,mtsx,cjs}',
      '**/*.error.spec-d.{js,jsx,ts,tsx,mjs,mjsx,mtsx,cjs}',
    ],
  },
}

import { fileURLToPath } from 'node:url'
//

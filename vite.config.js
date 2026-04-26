/// <reference types="vitest/config" />

export { viteConfig as default }

/** @type {import("vite").UserConfig} */
const viteConfig = {
  test: {
    name: 'unit',
    passWithNoTests: true,
    coverage: {
      exclude: ['src/test/**/*'],
    },
    include: [
      '**/*.spec.{js,jsx,ts,tsx,mjs,mjsx,mtsx,cjs}',
      '**/*.error.spec-d.{js,jsx,ts,tsx,mjs,mjsx,mtsx,cjs}',
    ],
    environment: 'jsdom',
    typecheck: {
      enabled: true,
      tsconfig: './tsconfig.test.json',
    },
  },
}

//

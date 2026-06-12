export { viteConfig as default }

/** @type {import("vite").UserConfigFn} */
const viteConfig = async () => {
  const tokens = await readdir(path.resolve(import.meta.dirname, 'src/tokens/'))
  const utilities = await readdir(
    path.resolve(import.meta.dirname, 'src/utilities/'),
  )

  return {
    plugins: [
      // eslint-disable-next-line import-x/no-named-as-default-member
      stylex.vite({
        aliases: {
          '#/*': path.resolve(import.meta.dirname, './src/*'),
        },
      }),
      //
    ],

    resolve: {
      alias: {
        '#/*': path.resolve(import.meta.dirname, './src/*'),
      },
    },

    build: {
      outDir: 'test-build/',
      lib: {
        formats: ['es'],
        entry: Object.fromEntries(
          [
            // ['index', './src/index.ts'],

            ...utilities
              .filter(
                (name) => name.endsWith('.ts') && !name.endsWith('.spec.ts'),
              )
              .map((name) => [
                `utilities/${name.replaceAll('.ts', '')}`,
                `./src/utilities/${name}`,
              ]),

            ...tokens
              .filter(
                (name) => name.endsWith('.ts') && !name.endsWith('.spec.ts'),
              )
              .map((name) => [
                `tokens/${name.replaceAll('.ts', '')}`,
                `./src/tokens/${name}`,
              ]),
          ].map(([key, value]) => [
            key,
            path.resolve(
              import.meta.dirname,
              // @ts-expect-error
              value,
            ),
          ]),
        ),
      },
    },
  }
}

import path from 'node:path'
import { readdir } from 'node:fs/promises'
import stylex from '@stylexjs/unplugin'
//

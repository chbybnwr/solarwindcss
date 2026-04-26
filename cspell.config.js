export { cSpellConfig as default }

/** @type {import("cspell").CSpellSettings} */
const cSpellConfig = {
  version: '0.2',
  language: 'en',
  ignorePaths: ['./pnpm-lock.yaml'],
  useGitignore: true,
  dictionaries: ['dictionary'],

  dictionaryDefinitions: [
    {
      name: 'dictionary',
      path: './dictionary.txt',
      addWords: true,
    },
  ],
}

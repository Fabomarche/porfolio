module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // This codebase does not use PropTypes, and React Three Fiber uses
    // non-DOM props. The fast-refresh rule also flags the section HOC.
    'react/prop-types': 'off',
    'react/no-unknown-property': 'off',
    'react/no-unescaped-entities': 'off',
    'react-refresh/only-export-components': 'off',
  },
  overrides: [
    {
      files: ['*.config.js', 'tailwind.config.js', 'postcss.config.js', 'vite.config.js'],
      env: { node: true },
    },
  ],
}

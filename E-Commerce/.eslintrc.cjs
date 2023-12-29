module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: [{
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  {
    test: /\.css$/,
    include: path.join(__dirname, 'src/components'),
    use: [
      'style-loader',
      {
        loader: 'typings-for-css-modules-loader',
        options: {
          modules: true,
          namedExport: true
        }
      }
    ]
  }
],
}

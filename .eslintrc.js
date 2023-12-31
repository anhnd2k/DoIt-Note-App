module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'unused-imports'],
  ignorePatterns: [
      'node_modules',
      'dist',
      'public',
      '.eslintrc.js',
      'babel.config.js',
      'jest.config.js',
      'metro.config.js',
      'react-native.config.js',
  ],
  extends: [
      '@react-native-community',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'prettier',
  ],
  parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
  },
  rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-children-prop': 'off',
      'react/display-name': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'no-shadow': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
          'warn',
          {
              vars: 'all',
              varsIgnorePattern: '^_',
              args: 'after-used',
              argsIgnorePattern: '^_',
          },
      ],
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-alert': 'off',
  },
  settings: {
      react: {
          version: '17',
      },
  },
};
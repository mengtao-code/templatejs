module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    env: {
        browser: true,
        node: true
    },
    rules: {
        semi: ['warn', 'never'],
        'comma-dangle': ['warn', 'never'],
        quotes: ['warn', 'single'],
        'jsx-quotes': ['warn', 'prefer-single'],
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        'no-empty-pattern': 'warn',
        'prefer-const': 'warn',
        'no-empty': 'warn'
    }
}

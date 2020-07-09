module.exports = {
    env: {
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        extraFileExtensions: [],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/prop-types': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        //     '@typescript-eslint/adjacent-overload-signatures': 'error',
        //     '@typescript-eslint/array-type': 'error',
        //     '@typescript-eslint/ban-types': 'error',
        //     '@typescript-eslint/class-name-casing': 'error',
        //     '@typescript-eslint/explicit-member-accessibility': [
        //         'error',
        //         {
        //             overrides: {
        //                 constructors: 'off',
        //             },
        //         },
        //     ],
        //     '@typescript-eslint/indent': 'off',
        //     '@typescript-eslint/interface-name-prefix': 'error',
        //     '@typescript-eslint/member-delimiter-style': 'off',
        //     '@typescript-eslint/member-ordering': 'error',
        //     '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
        //     '@typescript-eslint/no-empty-interface': 'error',
        //     '@typescript-eslint/no-explicit-any': 'off',
        //     '@typescript-eslint/no-misused-new': 'error',
        //     '@typescript-eslint/no-namespace': 'error',
        //     '@typescript-eslint/no-parameter-properties': 'off',
        //     '@typescript-eslint/no-triple-slash-reference': 'error',

        //     '@typescript-eslint/no-var-requires': 'error',
        //     '@typescript-eslint/prefer-for-of': 'error',
        //     '@typescript-eslint/prefer-function-type': 'error',
        //     '@typescript-eslint/prefer-interface': 'error',
        //     '@typescript-eslint/prefer-namespace-keyword': 'error',
        //     '@typescript-eslint/quotes': ['error', 'single'],
        //     '@typescript-eslint/type-annotation-spacing': 'off',
        //     '@typescript-eslint/unified-signatures': 'error',
        //     'arrow-body-style': 'error',
        //     'arrow-parens': ['error', 'as-needed'],
        //     complexity: 'off',
        //     'constructor-super': 'error',
        //     curly: 'error',
        //     'dot-notation': 'error',
        //     'eol-last': 'off',
        //     eqeqeq: ['error', 'smart'],
        //     'guard-for-in': 'error',
        //     'linebreak-style': 'off',
        //     'max-classes-per-file': ['error', 1],
        //     'max-len': [
        //         'error',
        //         {
        //             code: 140,
        //             ignorePattern: '^import |^export {(.*?)}',
        //         },
        //     ],
        //     'new-parens': 'off',
        //     'newline-per-chained-call': 'off',
        //     'no-bitwise': 'error',
        //     'no-caller': 'error',
        //     'no-cond-assign': 'error',
        //     'no-console': 'error',
        //     'no-debugger': 'error',
        //     'no-empty': 'error',
        //     'no-empty-functions': 'error',
        //     'no-eval': 'error',
        //     'no-extra-semi': 'off',
        //     'no-fallthrough': 'off',
        //     'no-invalid-this': 'off',
        //     'no-irregular-whitespace': 'off',
        //     'no-multiple-empty-lines': 'off',
        //     'no-new-wrappers': 'error',
        //     'no-throw-literal': 'error',
        //     'no-trailing-spaces': 'off',
        //     'no-undef-init': 'error',
        //     'no-unsafe-finally': 'error',
        //     'no-unused-labels': 'error',
        //     'no-var': 'error',
        //     'object-shorthand': 'error',
        //     'one-var': 'error',
        //     'prefer-arrow/prefer-arrow-functions': 'error',
        //     'prefer-const': 'error',
        //     'quote-props': 'off',
        //     radix: 'error',
        //     'space-before-function-paren': 'off',
        //     'use-isnan': 'error',
        //     'valid-typeof': 'off',
        //     '@typescript-eslint/tslint/config': [
        //         'error',
        //         {
        //             rulesDirectory: [
        //                 'C:\\dev\\officeatwork365\\admin-center\\node_modules\\tslint-react\\rules',
        //                 'C:\\dev\\officeatwork365\\admin-center\\node_modules\\tslint-plugin-prettier\\rules',
        //             ],
        //             rules: {
        //                 'comment-format': [true, 'check-space'],
        //                 'jsdoc-format': true,
        //                 'jsx-boolean-value': true,
        //                 'jsx-key': true,
        //                 'jsx-no-bind': true,
        //                 'jsx-no-lambda': true,
        //                 'jsx-no-string-ref': true,
        //                 'jsx-self-close': true,
        //                 'no-reference-import': true,
        //                 'no-shadowed-variable': true,
        //                 'no-unused-expression': true,
        //                 'object-literal-sort-keys': [
        //                     true,
        //                     'match-declaration-order',
        //                 ],
        //                 'ordered-imports': [
        //                     true,
        //                     {
        //                         'import-sources-order': 'case-insensitive',
        //                         'module-source-path': 'full',
        //                         'named-imports-order': 'case-insensitive',
        //                     },
        //                 ],
        //                 'variable-name': [
        //                     true,
        //                     'ban-keywords',
        //                     'check-format',
        //                     'allow-pascal-case',
        //                 ],
        //             },
        //         },
        //     ],
    },
};
module.exports = {
	'no-prototype-builtins': 0,
	'no-tabs': 0,
	indent: [
		'error',
		'tab',
		{
			SwitchCase: 1,
			VariableDeclarator: 'first',
			offsetTernaryExpressions: true
		}
	],
	'import/extensions': [
		'error',
		'ignorePackages',
		{
			js: 'never',
			ts: 'never'
		}
	],
	'comma-dangle': [
		'error',
		{
			arrays: 'never',
			objects: 'never',
			imports: 'never',
			exports: 'never',
			functions: 'never'
		}
	],
	quotes: [
		'error',
		'single',
		{
			allowTemplateLiterals: true
		}
	],
	'no-new': 0,
	'max-len': [
		'error',
		{
			code: 150,
			tabWidth: 4
		}
	],
	'array-bracket-spacing': ['error', 'never'],
	'linebreak-style': ['error', 'unix'],
	camelcase: [
		'error',
		{
			ignoreDestructuring: true,
			properties: 'never'
		}
	],
	'no-param-reassign': [
		'error',
		{
			props: false
		}
	],
	'prefer-const': [
		'error',
		{
			destructuring: 'any',
			ignoreReadBeforeAssign: false
		}
	],
	'no-new-object': 'error',
	'object-shorthand': [
		'error',
		'always',
		{
			avoidQuotes: true,
			ignoreConstructors: true,
			avoidExplicitReturnArrows: true
		}
	],
	'padded-blocks': ['error', 'never'],
	'space-in-parens': [
		'error',
		'never',
		{
			exceptions: []
		}
	],
	'object-curly-spacing': ['error', 'always'],
	semi: ['error', 'always'],
	'eol-last': ['error', 'always'],
	'comma-spacing': [
		'error',
		{
			before: false,
			after: true
		}
	],
	'no-multiple-empty-lines': [
		'error',
		{
			max: 2,
			maxBOF: 1,
			maxEOF: 0
		}
	],
	'comma-style': ['error', 'last'],
	'operator-linebreak': [
		'error',
		'after',
		{
			overrides: {
				'?': 'ignore',
				':': 'ignore'
			}
		}
	],
	'padding-line-between-statements': [
		'error',
		{
			blankLine: 'always',
			prev: ['const', 'let', 'var'],
			next: '*'
		},
		{
			blankLine: 'any',
			prev: ['const', 'let', 'var'],
			next: ['const', 'let', 'var']
		}
	],
	'newline-per-chained-call': 'warn',
	curly: ['warn', 'all'],
	eqeqeq: ['error', 'always'],
	'arrow-spacing': [
		'warn',
		{
			before: true,
			after: true
		}
	],
	'space-infix-ops': 'error',
	'no-catch-shadow': 'warn',
	'no-delete-var': 'warn',
	'no-label-var': 'warn',
	'no-shadow-restricted-names': 'warn',
	'no-undef-init': 'warn',
	'no-undef': 'warn',
	'sort-keys': 0,
	'dot-notation': 0,
	'no-empty': 0,
	'no-console': 0,
	'space-before-blocks': 'warn',
	'space-before-function-paren': [
		1,
		{
			anonymous: 'always',
			named: 'never'
		}
	],
	'import/prefer-default-export': 0,
	'no-restricted-syntax': 0,
	'no-return-await': 0,
	'no-shadow': 0,
	'@typescript-eslint/no-shadow': 0,
	'quote-props': ['error', 'as-needed'],
	'no-v-for-template-key-on-child': 0,
	'react/jsx-filename-extension': [
		1,
		{
			extensions: ['.jsx', '.tsx']
		}
	],
	'no-underscore-dangle': ['error', { allowAfterSuper: true, allowAfterThis: true }],
	'no-useless-constructor': 0,
	'class-methods-use-this': 0,
	'import/order': [
		'warn',
		{
			groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
			'newlines-between': 'never',
			alphabetize: {
				order: 'desc',
				caseInsensitive: true
			}
		}
	]
};

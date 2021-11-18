module.exports = {
	plugins: ['stylelint-prettier', 'stylelint-selector-bem-pattern', 'stylelint-declaration-strict-value'],
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recommended-scss',
		'stylelint-config-standard-scss',
		'stylelint-config-rational-order',
		'stylelint-config-recommended-vue'
	],
	rules: {
		'string-quotes': 'single',
		indentation: 'tab',
		'prettier/prettier': true,
		'no-descending-specificity': null,
		'declaration-colon-newline-after': null,
		'selector-class-pattern': null,
		'no-extra-semicolons': true,
		'declaration-block-trailing-semicolon': 'always',
		'block-opening-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always',
		// 'plugin/selector-bem-pattern': {
		// 	'componentName': '^[A-Z][a-zA-Z0-9]+$',
		// 	'componentSelectors': '^\\.{componentName}(?:__[a-z][a-zA-Z0-9]*)?(?:--[a-z][a-zA-Z0-9]*)?$',
		// 	'implicitComponents': true,
		// 	'ignoreCustomProperties': /.*/,
		// },
		'plugin/selector-bem-pattern': {
			componentName: '[A-Z]+',
			componentSelectors: {
				initial: '^\\.{componentName}(?:-[a-z]+)?$',
				combined: '^\\.combined-{componentName}-[a-z]+$'
			},
			utilitySelectors: '^\\.util-[a-z]+$'
		}
	},
	overrides: [
		{
			customSyntax: 'postcss-scss',
			files: ['*.scss, **/*.scss', '*.sass, **/*.sass'],
			extends: ['stylelint-config-recommended-scss', 'stylelint-config-standard-scss'],
			plugins: ['stylelint-scss']
		},
		{
			files: ['*.vue', '**/*.vue'],
			rules: {
				'unit-allowed-list': ['em', 'rem', 's']
			}
		}
	]
};

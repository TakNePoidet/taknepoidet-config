module.exports = {
	plugins: ['stylelint-prettier', 'stylelint-selector-bem-pattern', 'stylelint-declaration-strict-value'],
	extends: [
		'stylelint-config-recommended',
		'stylelint-config-standard',
		'stylelint-config-recommended-scss',
		'stylelint-config-rational-order',
		'stylelint-config-standard-scss'
	],
	rules: {
		'scss/operator-no-unspaced': null,
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
		'no-invalid-position-at-import-rule': null,
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{
				ignoreShorthands: ['/grid/']
			}
		],
		'plugin/selector-bem-pattern': {
			componentName: '[A-Z]+',
			componentSelectors: {
				initial: '^\\.{componentName}(?:-[a-z]+)?$',
				combined: '^\\.combined-{componentName}-[a-z]+$'
			},
			utilitySelectors: '^\\.util-[a-z]+$'
		},
		'value-no-vendor-prefix': [
			true,
			{
				// option: true,
				ignoreValues: ['box']
			}
		],
		'shorthand-property-no-redundant-values': true
	},
	overrides: [
		{
			// eslint-disable-next-line global-require,import/no-extraneous-dependencies
			customSyntax: require('postcss-scss'),
			files: ['**/*.scss', '**/*.sass']
		},
		{
			// eslint-disable-next-line global-require
			customSyntax: require('postcss-html'),
			files: ['*.vue', '**/*.vue']
		}
	]
};

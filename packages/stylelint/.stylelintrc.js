module.exports = {
	plugins: ['stylelint-prettier', 'stylelint-selector-bem-pattern', 'stylelint-declaration-strict-value'],
	extends: [
		'stylelint-config-recommended',
		'stylelint-config-standard',
		'stylelint-config-recommended-scss',
		'stylelint-config-rational-order',
		'stylelint-config-standard-scss',
		'stylelint-config-html/vue'
	],
	rules: {
		'import-notation': 'url',
		'scss/operator-no-unspaced': null,
		// 'string-quotes': 'single',
		// indentation: 'tab',
		'prettier/prettier': true,
		'no-descending-specificity': null,
		'selector-class-pattern': null,
		'no-invalid-position-at-import-rule': null,
		'declaration-property-value-no-unknown': true,
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
		'shorthand-property-no-redundant-values': true,
		// 'value-list-comma-newline-after': null,
		'scss/double-slash-comment-whitespace-inside': null,
		'custom-property-pattern': null,
		'unit-no-unknown': null,
		'function-no-unknown': null
	},
	overrides: [
		{
			// eslint-disable-next-line global-require,import/no-extraneous-dependencies
			customSyntax: require('postcss-scss'),
			files: ['**/*.scss', '**/*.sass']
		}
	]
};

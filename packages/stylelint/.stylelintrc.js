module.exports = {
	plugins: ['stylelint-scss', 'stylelint-prettier', 'stylelint-selector-bem-pattern'],
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recommended-scss',
		'stylelint-config-standard-scss',
		'stylelint-config-rational-order'
	],
	rules: {
		'string-quotes': 'single',
		indentation: 'tab',
		'prettier/prettier': true,
		'no-descending-specificity': null,
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'declaration-colon-newline-after': null,
		'selector-class-pattern': null,
		'plugin/selector-bem-pattern': {
			componentName: '[A-Z]+',
			componentSelectors: {
				initial: '^\\.{componentName}(?:-[a-z]+)?$',
				combined: '^\\.combined-{componentName}-[a-z]+$'
			},
			utilitySelectors: '^\\.util-[a-z]+$'
		}
	}
};

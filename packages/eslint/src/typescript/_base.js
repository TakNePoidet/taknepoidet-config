module.exports = {
	rules: {
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/return-await': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/no-useless-constructor': 0,
		'no-use-before-define': 0,
		'@typescript-eslint/indent': 0,
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/space-before-function-paren': [
			1,
			{
				anonymous: 'always',
				named: 'never'
			}
		]
	}
};

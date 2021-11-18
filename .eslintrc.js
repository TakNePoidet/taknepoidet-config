module.exports = {
	root: true,
	extends: ['@taknepoidet-config/eslint-config'],
	rules: {
		'import/no-extraneous-dependencies': 0,
		'no-undef': 0
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				sourceType: 'module',
				project: ['./tsconfig.json']
			}
		}
	]
};

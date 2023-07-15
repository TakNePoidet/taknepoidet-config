// eslint-disable-next-line import/no-extraneous-dependencies
const deepmerge = require('deepmerge');
const common = require('../common/_base');
const baseTypeScript = require('./_base');

module.exports = {
	overrides: [
		deepmerge(
			{
				files: ['*.ts', '*.tsx'],
				parserOptions: {
					sourceType: 'module',
					project: ['./tsconfig.json']
				},
				parser: '@typescript-eslint/parser',
				plugins: ['import', 'prettier'],
				extends: ['standard-with-typescript'],
				rules: deepmerge(common, {
					'prettier/prettier': [
						'error',
						{
							singleQuote: true,
							parser: 'typescript'
						}
					]
				}),
				settings: {
					'import/resolver': {
						node: {
							extensions: ['.ts']
						}
					}
				}
			},
			baseTypeScript
		)
	]
};

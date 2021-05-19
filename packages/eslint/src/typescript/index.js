// eslint-disable-next-line import/no-extraneous-dependencies
const deepmerge = require('deepmerge');
const baseTypeScript = require('./_base');
const common = require('../common/_base');

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
				plugins: ['@typescript-eslint'],
				extends: ['airbnb-typescript/base', 'plugin:@typescript-eslint/recommended', 'prettier'],
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

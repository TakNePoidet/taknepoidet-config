import merge from 'lodash.merge';
import clonedeep from 'lodash.clonedeep';
import { defineConfig } from '../utility';
import { javaScriptRules, typeScriptRules } from '../rules';

export const typeScriptConfig = defineConfig(() => ({
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				sourceType: 'module',
				project: ['./tsconfig.json']
			},
			parser: '@typescript-eslint/parser',
			plugins: ['import', 'prettier', '@typescript-eslint'],
			extends: ['standard-with-typescript', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
			rules: merge(clonedeep(javaScriptRules), clonedeep(typeScriptRules), {
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
		}
	]
}));

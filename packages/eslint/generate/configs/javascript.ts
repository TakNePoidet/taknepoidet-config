import { defineConfig } from '../utility';
import { javaScriptRules } from '../rules';

export const javaScriptConfig = defineConfig(() => ({
	extends: ['standard'],
	plugins: ['import', 'prettier'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			classes: true,
			jsx: true
		}
	},
	env: {
		es6: true,
		browser: true,
		node: true
	},
	rules: {
		'prettier/prettier': 'error',
		...javaScriptRules
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js']
			}
		}
	}
}));

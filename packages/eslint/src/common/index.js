const rules = require('./_base');

module.exports = {
	extends: ['airbnb', 'airbnb-base'],
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
		...rules
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js']
			}
		}
	}
};

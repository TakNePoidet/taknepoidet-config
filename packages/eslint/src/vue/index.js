// eslint-disable-next-line import/no-extraneous-dependencies
const deepmerge = require('deepmerge');
const common = require('../common');
const typescript = require('../typescript/_base');

const vue = deepmerge(deepmerge(common, typescript), {
	parser: 'vue-eslint-parser',
	extends: [
		'plugin:vue/essential',
		'plugin:vue/base',
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
		'@vue/typescript',
		'@vue/typescript/recommended',
		'plugin:vue/recommended',
		'plugin:prettier-vue/recommended',
		'prettier'
	],
	plugins: ['prettier', '@typescript-eslint'],
	rules: {
		'no-use-before-define': 0,
		'vue/no-deprecated-props-default-this': 0,
		'vue/no-multiple-template-root': 0,

		'vue/require-component-is': 0,
		'vue/component-name-in-template-casing': 0,
		// 'vue/html-indent': [
		// 	'error',
		// 	'tab',
		// 	{
		// 		attribute: 1,
		// 		closeBracket: 0,
		// 		baseIndent: 1,
		// 		alignAttributesVertically: true,
		// 		ignores: ['VAttribute']
		// 	}
		// ],
		// 'vue/html-closing-bracket-newline': [
		// 	'error',
		// 	{
		// 		singleline: 'never',
		// 		multiline: 'always'
		// 	}
		// ],
		// 'vue/html-self-closing': [
		// 	'error',
		// 	{
		// 		html: {
		// 			void: 'always',
		// 			normal: 'always',
		// 			component: 'always'
		// 		},
		// 		svg: 'never',
		// 		math: 'always'
		// 	}
		// ],
		// eslint-disable-next-line global-require,import/no-extraneous-dependencies
		'prettier-vue/prettier': ['error', { ...require('@taknepoidet-config/prettier') }],
		'@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/return-await': 0,
		'@typescript-eslint/no-useless-constructor': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0
	},
	settings: {
		'import/resolver': 'webpack',
		'prettier-vue': {
			SFCBlocks: {
				template: false,
				script: true,
				style: true,

				customBlocks: {
					docs: { lang: 'markdown' },
					config: { lang: 'json' },
					module: { lang: 'js' },
					comments: false
				}
			},
			usePrettierrc: true,
			fileInfoOptions: {
				ignorePath: '.testignore',
				withNodeModules: false
			}
		}
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.vue']
	}
});

module.exports = {
	overrides: [
		{
			files: ['*.vue'],
			...vue
		}
	]
};

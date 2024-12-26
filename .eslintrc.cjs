require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: '2022',
		sourceType: 'module',
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
	env: {
		// 'vue/setup-compiler-macros': true,
		browser: true,
		es6: true,
		node: true,
	},
	rules: {
		// 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// 'no-unused-vars': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'all',
				// printWidth: 120,
				bracketSpacing: true,
				bracketSameLine: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
	},
}

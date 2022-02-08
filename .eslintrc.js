module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	ignorePatterns: ['.eslintrc.js'],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		indent: ['error', 'tab'],
		'no-console': 'warn',
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	}
};

import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
	},
	pluginJs.configs.recommended,
	{
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
		},
	},
	{
		ignores: ['dist/', '.idea', 'coverage/'],
	},
];

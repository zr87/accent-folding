// eslint.config.js
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
	js.configs.recommended,
	{
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		},
	},
	{
		ignores: ["dist/", ".idea"],
	},
	eslintConfigPrettier,
];

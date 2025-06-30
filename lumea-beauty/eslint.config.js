import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,jsx}"],
		plugins: { js, react: pluginReact },
		languageOptions: { globals: globals.browser },
		rules: {
			"react/react-in-jsx-scope": "off", // 👈 Відключаємо помилку
		},
		extends: ["js/recommended", pluginReact.configs.flat.recommended],
	},
	{
		files: ["**/*.js"],
		languageOptions: { sourceType: "script" },
	},
]);
 
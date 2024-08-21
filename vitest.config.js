import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			reporter: ['text', 'json', 'json-summary', 'lcov'],
			exclude: [...configDefaults.exclude, '**/index.*', 'release.config.cjs'],
			thresholds: {
				lines: 80,
				functions: 80,
				branches: 80,
				statements: 80,
			},
		},
	},
});

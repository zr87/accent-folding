import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
	test: {
		exclude:[
			...configDefaults.exclude,
		],
		coverage: {
			reporter: ['text', 'json', 'json-summary', 'lcov'],
			thresholds:{
				lines: 80,
				functions: 80,
				branches: 80,
				statements: 80
			}
		},
	},
})

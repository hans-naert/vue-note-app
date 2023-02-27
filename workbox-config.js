module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,js,svg,ico,html}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	mode: 'development'
};
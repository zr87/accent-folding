module.exports = {
	branches: ['main', { name: 'next', prerelease: true }],
	plugins: ['@semantic-release/git', '@semantic-release/changelog'],
};

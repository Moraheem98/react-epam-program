module.exports = {
	setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
	moduleNameMapper: {
		'\\.(scss|less)$': '<rootDir>/styleMock.js',
	},
	testEnvironment: 'jsdom',
};

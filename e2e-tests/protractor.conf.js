exports.config = {
    allScriptsTimeout: 11000,
    specs: ['*_test.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'http://localhost:3000/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
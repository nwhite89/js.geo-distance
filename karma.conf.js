module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            './src/distance.js',
            './tests/*.spec.js'
        ],
        exclude: [],
        browsers: [
            'PhantomJS'
        ],
        frameworks: [
            'jasmine'
        ],
        reporters: [
            'progress',
            'coverage'
        ],
        preprocessors: {
            './src/distance.js': 'coverage'
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        },
        port: 9876,
        runnerPort: 9100,
        autoWatch: true,
        captureTimeout: 60000,
        singleRun: true
    });
};

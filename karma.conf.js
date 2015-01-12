/*global module */
module.exports = function (config) {
    "use strict";
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'requirejs'],
        files: [
            'test/main-test.js',
            'test/smorgasbord-build.css',
            {pattern: 'test/main-css.js', included: false},
            {pattern: 'test/bower/*.js', included: false},
            {pattern: 'test/**/*Tests.js', included: false}
        ],
        exclude: [ ],
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],
        port: 9876,
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,
        autoWatch: false,
        browsers: ['PhantomJS'],
        //singleRun: false
        singleRun: true
    });
};

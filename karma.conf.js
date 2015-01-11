/*global module */
module.exports = function (config) {
    'use strict';
    config.set({
        basePath: 'test/',
        frameworks: ['jasmine'],
        files: [
            '**/*.js'
        ],
        exclude: [],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: true
    });
};

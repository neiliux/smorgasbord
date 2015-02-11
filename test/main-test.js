/*global require, window */
var allTestFiles = [];
var TEST_REGEXP = /(tests)\.js$/i;

var pathToModule = function (path) {
    "use strict";
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function (file) {
    "use strict";
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',
    paths: {
        'jquery': 'test/bower/jquery',
        //'underscore': '../lib/underscore',
        'load_css': 'test/main-css',
        'chai': 'test/bower/chai',
        'chai-jquery': 'test/bower/chai-jquery',
        'quasiExcerpt': 'test/bower/quasiExcerpt'
	  },
    shim: {
        'jquery': {
            exports: '$'
        }
    },
    // dynamically load all test files
    deps: ['load_css'].concat(allTestFiles),
    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});

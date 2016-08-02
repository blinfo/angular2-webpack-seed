// Karma configuration
// Generated on Tue Jun 28 2016 23:01:12 GMT+0200 (CEST)

const webpackEnv = {test:true};
const webpackConfig = require("./webpack.test")
//! for excluding test files in code coverage
const fileGlob = "src/app/**/*.!(test).ts";
const testFiles = "src/app/**/*.test.ts";

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",
autoWatchBatchDelay:1000,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],


    // list of files / patterns to load in the browser
    files:  [
      "./karma-test-shim.js",    
      fileGlob,
      testFiles],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      [fileGlob]:"webpack",
     [testFiles]:"webpack",
      "./spec-bundle.js":["webpack","coverage", "sourcemap"],
      "./karma-test-shim.js":"webpack"
    },
    webpack:webpackConfig,
    webpackMiddleware:{ noInfo : true },
    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress","coverage"],
 
    coverageReporter: {
      dir : "coverage/",
      reporters: [
        { type: "text-summary" },
        { type: "json" },
        { type: "html" }
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};

// Karma configuration
// Generated on Tue Jun 28 2016 23:01:12 GMT+0200 (CEST)

const webpackEnv = {test:true};
const webpackConfig = require('./webpack-test.config')(webpackEnv)
const fileGlob = 'src/**/*.test.ts';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files:  [ { pattern: './spec-bundle.js', watched: false } ],


    // list of files to exclude
    exclude: [
      './node_modules'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './spec-bundle.js':['webpack','coverage', 'sourcemap']
    },
    webpack:webpackConfig,
    webpackMiddleware:{ noInfo : true },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],
    coverageReporter:{
      reports:[
        {type:'icov',dir:'coverage/',subdir:'.'},
        {type:'json',dir:'coverage/',subdir:'.'},
        {type:'text-summary'}
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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};

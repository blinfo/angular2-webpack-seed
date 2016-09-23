Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('reflect-metadata');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/fake-async-test');
/*
const testFiles = require.context("../src",true,/\.test\.ts/);

testFiles.keys().forEach(testFiles);
*/
var testContext = require.context('../src', true, /\.test\.ts/);


var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(
  browser.BrowserDynamicTestingModule,
  browser.platformBrowserDynamicTesting()
);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}



// requires and returns all modules that match

var modules = requireAll(testContext);
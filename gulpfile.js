var gulp = require("gulp");
var exec = require("child_process").exec;
var browserSync = require("browser-sync");

gulp.task("compile", function() {
   exec("rm -rf test/build && tsc  ./test/basic/*spec.ts --outDir test/build") 
});

gulp.task('watch', ['compile'], function () {
    return gulp.watch('./test/basic/*.ts', ['compile']);
});

gulp.task('test', ['watch'], function () {
 
    var options = {
        port: 3000,
        server: './',
        files: ['./test/build/*spec.js',
                 '!./test/build/*.js.map'],
        logFileChanges: true,
        logLevel: 'info',
        logPrefix: 'spec-runner',
        notify: true,
        reloadDelay: 1000,
        startPath: './test/units-tests.html'
    };
 
    browserSync(options);
});

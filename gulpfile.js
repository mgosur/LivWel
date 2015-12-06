var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var sourceStream = require('vinyl-source-stream');

gulp.task('live-server', function() {
	var server = LiveServer('./app/server.js');
	server.start();
})
gulp.task('bundle', function() {
	return browserify({
		entries: 'public/main.jsx',
		debug: true,
	})
	.transform(reactify)
	.bundle()
	.pipe(sourceStream('build.js'))
	.pipe(gulp.dest('./.dist'));
})
//browser sync allowing for stringing together of 
gulp.task('serve', ['bundle','live-server'], function() {
	browserSync.init(null, {
		proxy:"http://localhost:8888",
		port: 9001
	})
})
var gulp = require('gulp');
var LiveServer = require('gulp-live-server');

gulp.task('live-server', function() {
	var server = new LiveServer('server/main.js');
	server.start();
})
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const scripts =  require('./scripts');
const styles =  require('./styles');

var devMode = false;

gulp.task('sass', function () {
	gulp.src('./src/styles/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('css', function () {
	gulp.src(styles)
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

//browserify
gulp.task('script', function () {
	gulp.src('./src/app.js')
		.pipe(browserify({
			insertGlobal: true,
			debug: true
		}))
		.pipe(gulp.dest('./dist/js'))
});

gulp.task('js', function () {
	gulp.src(scripts)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.reload({
			stream: true // reload in background
		}));
});

gulp.task('html', function () {
	gulp.src('./src/templates/**/*.html')
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('build', function () {
	gulp.start(['sass', 'script', 'html']);
});

gulp.task('browser-sync', function () {
	browserSync.init(null, {
		open: false,
		server: {
			baseDir: 'dist'
		}
	});
});

gulp.task('start', function () {
	devMode = true;
	gulp.start(['build', 'browser-sync']);
	gulp.watch(['./src/styles/**/*.scss'], ['sass']);
	gulp.watch(['./src/**/*.js'], ['script']);
	gulp.watch(['./src/templates/**/*.html'], ['html']);
});


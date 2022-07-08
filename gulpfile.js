//gulpfile.js

import del from 'del';
import gulp from 'gulp';
const { task, watch, src, dest, parallel } = gulp;
import rename from 'gulp-rename';
import gulpPug from 'gulp-pug';
import gulpSass from 'gulp-sass';
import sassCompiler from 'sass';
import postcss from 'gulp-postcss';
import minify from 'postcss-csso';

var sass = gulpSass(sassCompiler);

var postcssPlugins = [
	minify(),
];

var config = {
	main: {
		src: [ 'src/main/index.scss' ],
		dist: 'dist/',
		distBasename: 'spongia'
	},
	test: {
		src: [ 'src/test/*.pug', '!**/test-sample.pug' ],
		dist: 'src/test/',
		distBasename: 'spongia'
	}
}

task('clean', () => del(['dist']));

task('main:compile', function() {
	return src(config.main.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(postcssPlugins))
		.pipe(rename({ basename: config.main.distBasename, extname: ".min.css" }))
		.pipe(dest(config.main.dist));
});

task('test:compile', function() {
	return src(config.test.src)
		.pipe(gulpPug())
		.pipe(dest(config.test.dist));
});

task('main:watch', function () {
	watch(config.main.scss.src, parallel(['main:compile']));
});
var gulp           = require('gulp');
var browserSync    = require('browser-sync').create();
var sass           = require('gulp-sass');
var twig           = require('gulp-twig');
var beautify       = require('gulp-jsbeautifier');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Beautify html
gulp.task('beautify', () =>
  gulp.src('src/*.html')
    .pipe(beautify())
    .pipe(gulp.dest('src'))
);

// Compile html/*.twig files into src/*.html
gulp.task('compile', function () {
    return gulp.src('src/html/*.twig')
        .pipe(twig())
        .pipe(beautify())
        .pipe(gulp.dest('src'))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'compile'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch(['src/*.html', 'src/html/*.twig', 'src/templates/**/*.twig'], ['compile']);
});

gulp.task('default', ['js', 'serve']);

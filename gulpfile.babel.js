import gulp from 'gulp';
import babel from 'gulp-babel';
import webpack from 'gulp-webpack';
import react from 'gulp-react';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import watch from 'gulp-watch';

gulp.task('default', ['script']);
gulp.task('watch', watchTask);

gulp.task('script', ['script:vendors', 'script:main']);
gulp.task('script:vendors', vendorsTask);
gulp.task('script:main', scriptTask);

function vendorsTask () {
    return gulp
        .src([
            'node_modules/flux/dist/Flux.js'
        ])
        .pipe(concat('./dist/vendors.js'))
        .pipe(gulp.dest('.'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('.'));
}

function scriptTask () {
    return gulp
        .src([
            './src/main.js'
        ])
        .pipe(webpack({
            module: {
                loaders: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react', 'stage-1']
                        }
                    }
                ]
            }
        }))
        .pipe(concat('./dist/scripts.js'))
        .pipe(gulp.dest('.'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('.'));
}

function watchTask () {
    return watch('./src/**/*.js', scriptTask);
}

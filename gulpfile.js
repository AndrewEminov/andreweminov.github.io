var gulp = require('gulp');
var less = require('gulp-less');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('less', function() {
  return gulp.src('app/less/style.less')
  .pipe(less())
  .pipe(gulp.dest('app/css'))
});
gulp.task('postcss', function () {
    var plugins = [
        autoprefixer({browsers:
          [
            'last 20 versions',
            'firefox >= 20'
          ]}),
    ];
    return gulp.src('app/css/style.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('app/css'));
});
gulp.task('watch', function() {
  gulp.watch('app/less/style.less', ['less']);
  gulp.watch('app/css/style.css' , function(){
    gulp.run('postcss')
  })
});

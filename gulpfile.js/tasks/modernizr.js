var gulp =  require('gulp');
var modernizr = require('gulp-modernizr');
const config = require('../config');

const modernizrTask = () => gulp.src(`${config.assetsPath}sass/**/*.scss`)
.pipe(modernizr({
    "options":[
        "setClasses"
    ]
}))
.pipe(gulp.dest(`${config.assetsPath}js/vendor`));

gulp.task('modernizr', modernizrTask);

module.exports = modernizrTask;
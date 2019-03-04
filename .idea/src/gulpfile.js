var gulp = require('gulp');
var less = require('gulp-less'); //(преобразуем все файлы less в css)
var autoprefixer = require('gulp-autoprefixer'); //(автоматическое добавление префиксов для разных браузеров)
var concat = require('gulp-concat');// (все файлы less, данного проекта, сохраняем в один файл rezstyle.css)
var base64 = require('gulp-base64');
var uglify = require('gulp-uglify');
var connect = require('connect');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


/*gulp.task('less', function(){ // Создаем таск less
    return gulp.src('styles/less/*.less') // Берем источник
        .pipe(less()) // Преобразуем less в CSS посредством gulp-less
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('styles/css')) // Выгружаем результата в папку app/css

});*/


// Watch scss AND html files, doing different things with each.
gulp.task('serve', function() {
    browserSync.init({
        server: {
            watch: true,
            baseDir: './'
},
    startPath: './markup'

    });
});

gulp.task('watch', ['serve'], function() {
   /*gulp.watch('styles/less/*.less', ['less']); // Наблюдение за sass файлами в папке sass*/
    gulp.watch('markup/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('scripts/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
    gulp.watch('styles/css/main.css', browserSync.reload);   // Наблюдение за JS файлами в папке js

});


gulp.task('default', ['watch']);

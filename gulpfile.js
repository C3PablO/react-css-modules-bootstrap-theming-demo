const gulp = require('gulp');
var fs = require('fs');
var path = require('path');
const sass = require('gulp-sass');
const cssModules = require('postcss-modules');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const transformSelectors = require("gulp-transform-selectors");
const merge = require('merge-stream');

const getFolders = (dir) => {
    return fs.readdirSync(dir)
      .filter((file) => {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

gulp.task('sass', () => {
  const folders = getFolders('./themes');

  return folders.map((folder) => {
      const modules = gulp.src(path.join('./themes/', folder, '/modules/**/*.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([cssModules({
          generateScopedName: '[name]__[local]',
          getJSON: () => false,
        })]))
        .pipe(transformSelectors((selector) => {
            if (selector !== 'body') {
              return `#${folder} ${selector}`;
            } else {
              return `${selector}#${folder}`;
            }
            
         }));

      const globals = gulp.src(path.join('./themes/', folder, '/global/**/*.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(transformSelectors((selector) => {
            if (selector !== 'body') {
              return `#${folder} ${selector}`;
            } else {
              return `${selector}#${folder}`;
            }
            
        }));

        return merge(modules, globals).pipe(concat(`${folder}.css`)).pipe(gulp.dest('./static'));
      
   });

});

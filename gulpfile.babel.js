import gulp from 'gulp'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import del from 'del'

const paths = {
  styles: {
    src: 'src/assets/scss/style.scss',
    dest: 'public',
    watch: 'src/assets/scss/**/*.scss'
  },
  bootstrap: {
    src: 'node_modules/bootstrap/**/*',
    dest: 'src/assets/bootstrap'
  },
  fonts: {
    src: 'node_modules/fontawesome-pro/web-fonts-with-css/**/*',
    dest: 'public/awesome'
  }
}

export const clean = () => del(['assets/css'])

export function styles () {
  return gulp.src(paths.styles.src)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compresed'
    }).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest))
}

export function bootstrap () {
  return gulp.src(paths.bootstrap.src)
    .pipe(gulp.dest(paths.bootstrap.dest))
}

export function fonts () {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest))
}

export function watch () {
  gulp.watch(paths.styles.watch, styles)
}

const build = gulp.series(clean, gulp.parallel(bootstrap, fonts), gulp.parallel(styles))
export default build

const dev = gulp.series(build, gulp.parallel(watch))
export { dev }

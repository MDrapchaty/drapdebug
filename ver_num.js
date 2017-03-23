const gulp = require('gulp');
const git = require('gulp-git');
const argv = require('yargs').argv;

// Creating gulp tasks to add and commit to git

// Task for git add all 
gulp.task('git add -A', () => {
	return gulp.src('./ver_num.js')
	  .pipe(git.add());
});

// Task for git commit
gulp.task('git commit -m', () => {
  return gulp.src('./ver_num.js')
    .pipe(git.commit('Version updated and commited'));
});
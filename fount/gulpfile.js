var  gulp = require("gulp");
var  sass = require("gulp-sass");
	gulp.task("sass",function(){
		gulp.src("css/scss/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("css/css"));
	});
gulp.task("watch",function(){
	gulp.watch("css/scss/*.scss",["sass"]);
});

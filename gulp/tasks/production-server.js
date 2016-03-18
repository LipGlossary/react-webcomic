/* global config, path */

gulp.task('production-server', ['default', 'mock'], function() {
  return require(path.join(config.PROJECT_ROOT, 'server.js'));
});

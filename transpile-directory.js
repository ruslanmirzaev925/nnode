var fs = require('fs');
var path = require('path');
var glob = require('glob');
var babel = require('babel-core');
var config = require('./config');
var mkdirp = require('./mkdirp');

/**
 * Remove directory recursively
 * @param {string} dir_path
 * @see https://stackoverflow.com/a/42505874/3027390
 */
function rimraf(dir_path) {
  if (fs.existsSync(dir_path)) {
    fs.readdirSync(dir_path).forEach(function(entry) {
      var entry_path = path.join(dir_path, entry);
      if (fs.lstatSync(entry_path).isDirectory()) {
        rimraf(entry_path);
      } else {
        fs.unlinkSync(entry_path);
      }
    });
    fs.rmdirSync(dir_path);
  }
}

module.exports = function() {
  var sourcePaths = glob.sync('src/**/*.js');
  sourcePaths.map(function(sourcePath) {
    rimraf('build');
    var destPath = path.join('build', path.relative('src', sourcePath));

    var code = babel.transformFileSync(sourcePath, config('4.0')).code;

    //const absoluteDestinationPath = path.resolve(path.join(outputDir, sourcePath));
    mkdirp(path.dirname(destPath));

    console.log(sourcePath, '~>', destPath);
    fs.writeFileSync(destPath, code, 'utf8');
  });
};
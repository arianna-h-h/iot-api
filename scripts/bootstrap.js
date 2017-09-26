const rimraf = require('rimraf');
const { execSync } = require('child_process');

function removeDir(dir) {
  rimraf.sync(dir);
}

function initRepository() {
  execSync('git init');
  execSync('git add .');
  execSync('git commit -m "Initial commit"');
}

removeDir('.git');

initRepository();

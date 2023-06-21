const { execSync } = require('child_process');
const fs = require('fs-extra');

// Clean `docs`
fs.emptyDirSync('./docs');

// Standart build
execSync('react-scripts build', { stdio: 'inherit' });

// Copy `build` into `docs`
fs.copySync('./build', './docs');

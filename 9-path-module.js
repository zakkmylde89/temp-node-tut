// The Built-In Path Module

const path = require('path');

console.log(path.sep); // gives file path serarator

// joins file path
const filePath= path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// gives base path name
const base = path.basename(filePath);
console.log(base);

// returns absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
// The Built-In FS (File Sync) Module - SYNCHROUNOUS

// This approach basically reads the file from top to bottom, and can result in tasks taking a longer time that wanted

// Synchronous Approach
const { readFileSync, writeFileSync } = require('fs');
console.log('start');

// Reading Files
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// Writing (Creating) Files
//! The {flag: 'a'} tells the file to only append the file if it exists rather than overwriting the file fully
writeFileSync('./content/result-sync.txt', 
    `Here is the result ${first}, ${second}`, 
    {flag: 'a'});

console.log('done with this task');
console.log('starting the next task');
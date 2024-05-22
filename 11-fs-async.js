// The Built-In FS (File Sync) Module - ASYNCHRONOUS

// Asynchronous Approach

// This allows for the task to be completed in the background by immediately offloading the task. With larger user bases this is an absolute must to allow server space for multiple users. 

const { readFile, writeFile } = require('fs');

console.log('start');

// Reading Files
//! we must include file path & encoding (utf8) or else this function will return a buffer error
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }) 
    })
});
console.log('starting next task');
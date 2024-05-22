// Read File Example

const { readFile } = require('fs');

console.log('started first task');
// CHECK FILE PATH
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(result);
        console.log('completed first task');
    }
})
console.log('starting next task');

// because the readFile is asynchronous it will offload its' task
// because of this this code in the terminal will return as
//      started first task
//      starting next task
//      First Text File
//      completed first task
// even though completed first task comes before starting next task
// the first task was offloaded from the event loop and was only returned once completed
// this means it is best
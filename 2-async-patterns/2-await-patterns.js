// Await Patterns (Promises Aysnc/Await)

const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);



const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grenade.txt',
         `THIS IS AWESOME: ${first} ${second}`,
        {flag: 'a'});
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();


// Overall the above pattern is the best way to asynchronously handle requests and responses to a server
// It requires the least amount of boiler plate, and doesn't use nested blocking functions to work
// We should remember though that in most packages these functions will already be provided within their
// dependency libraries

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));
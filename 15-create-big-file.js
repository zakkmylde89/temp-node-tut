// Create Big File

// Some data sets are too large to be stored in a variable like we've done with readFile() and writeFile()
// So we use streams to combat this issue

const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
}
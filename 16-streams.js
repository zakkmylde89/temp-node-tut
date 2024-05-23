// Streams

// Streams allow us to read data in chunks rather than all at once

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' });

// default 64kb of data
// last buffer = remainder
// highWaterMark = control size (changes default size per chunk of data streamed)
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });

stream.on('data', (result) => {
    console.log(result);
})
stream.on('error', (err) => console.log(err));
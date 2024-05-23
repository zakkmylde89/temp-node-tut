// HTTP Streams

const http = require('http');
const fs = require('fs');

// the .pipe() method turns readFile to writeFile
http.createServer(function (req, res) {
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
}).listen(5000)


// Handling a read file in this manner will result in sending the entire file through the event loop
// In this case it is 1.6MB and can even larger with more data.
// Unless absolutely necessary we should avoid sending this much readFile data

// http.createServer(function (req, res) {
//     const text = fs.readFileSync('./content/big.txt', 'utf8');
//     res.end(text);
// }).listen(5000);
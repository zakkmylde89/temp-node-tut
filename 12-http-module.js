// The Built-In HTTP Module
// The HTTP Module is how we setup our web server and API

const http = require('http');

// the create server function takes two parameters. "req" & "res" are common practice as they stand for request and response
// we use these because it is exactly what we are doing. we are accepting a "request" from the user which contains the user
//      information and what they are trying to recieve in return. then we are responding to that request with data from our server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our page')
    }
    else if (req.url === '/about') {
        res.end('History')
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>This page doesn't exist</p>
        <a href="/">Back Home</a>
    `)};
})

server.listen(5000); // set port in which the server will listen
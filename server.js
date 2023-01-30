var http = require('http');

var server = http.createServer(function (req,res) {
    if (req.url == '/') {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>Welcome to my Node.js Application.</p></body></html>');
        res.end('<html><body><p>Welcome John Smith. This is an activity about basics of Node.js</p></body></html>');
        

    }
    else if (req.url == "/about") {

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write("<html><body><p>This is the About Page.</p></body></html>");
        res.end('<html><body><p>Hello John Smith. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>');

    }
    else if (req.url ==  "/contact") {
        res.writeHead(200, {'Content-Type': 'text-html'});
        res.write("<html><body><p>This is the Contact Page.</p></body></html>");
        res.end('<html><body><p>John Smith, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs/nodejs-tutorials</p></body></html>');

    }
    else if (req.url ==  "/gallery") {
        res.writeHead(200, {'Content-Type': 'text-html'});
        res.write("<html><body><p>This is the Gallery Page.</p></body></html>");
        res.end();

    }
    else
        res.end('Invalid Request!');

});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')

//mary marionne tingin
//jan. 30, 2023
//wd-203
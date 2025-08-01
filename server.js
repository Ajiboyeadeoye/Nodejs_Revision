const http = require("http");
const fs = require("fs");
const _ = require("lodash");



const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 20);
    console.log(num);
    
const greet = _.once((name) => {
    console.log(`hello, ${name}`)
})
    
   greet("Adeoye")
    
    // set header content type
    res.setHeader('content-Type', 'text/html');

    
    // res.write('I love this website im creating');
    // res.write('<p>Hello Mr Ajboye</p>')
    // res.write('<p>Hello Mr Ajboye again</p>')
    // res.end;

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
             res.end()
        } else {
            res.write(data)
            res.end();
        }
    });
    
});

server.listen(3000, 'localhost', () => {
    console.log("Server is liistening for request on port 3000")
});
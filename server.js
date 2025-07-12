const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
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
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
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
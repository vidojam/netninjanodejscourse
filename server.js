const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// const server = http.createServer((req, res) => {
//     console.log('request made');
// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for request on port 3000');
// });

// result...
// $ node server
// listening for request on port 3000
// request made


//to console log request you must contr C
// const server = http.createServer((req, res) => {
//     console.log('req');
// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for request on port 3000');
// });

// result...
// $ node server
// listening for request on port 3000

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     //set header content type (3 steps)
//     res.setHeader('Content-Type', 'text/plain');
    
//     res.write('hello, ninjas');
//     res.end();
// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for request on port 3000');
// });

// how to send HTML...
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     //set header content type (3 steps)
//     res.setHeader('Content-Type', 'text/html');
    
//     res.write('<p> hello, ninjas <p>');
//     res.write('<p> hello again, ninjas <p>');
//     res.end();
// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for request on port 3000');
// });


// HOW TO SEND HTML PAGES TO THE BROWSER...require fs, read data from file
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     //set header content type (3 steps)
//     res.setHeader('Content-Type', 'text/html');

//     let path = './views/';
//     switch(req.url) {
//         case '/':
//             path += 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path += 'about.html';
//             res.statusCode = 200;
//             break;
//         case '/about-blah':
//                 res.statusCode = 301;//resource move - permanent redirect from about-me.html to about.html 
//                 res.setHeader('Location', '/about' );
//                 res.end();
//                 break;
//         default: 
//             path += '404.html'; 
//             res.statusCode = 404;
//             break;   
//     }

//     // send an html file
//     //fs.readFile('./views/index.html', (err, data) => {
//     fs.readFile(path, (err, data) => { //this line for 404, about & index case scenario
        
//         if (err) {
//             console.log (err);
//             res.end();
//         } else {
//             // res.write(data);
//             // res.end();
//             //or
           
//             res.end(data); //only without res.write(data); Can do this because we are only using it once.
//         }
//     }); 
// });


// lodash... 3rd party package... lodash.com
const server = http.createServer((req, res) => {
    
    // lodash - _.random is a lodash method you can use takes two arguments - what two numbers between. Run nodemon server
    const num = _.random(0, 20);
        console.log(num);
    //result in terminal 17, 12, etc

    // lodash method to run once... _.once()
    const greet = _.once(() => {
        console.log('hello');
    });

    greet(); //call function
    greet();

    //set header content type (3 steps)
    res.setHeader('Content-Type', 'text/html');

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
        case '/about-blah':
                res.statusCode = 301;//resource move - permanent redirect from about-me.html to about.html 
                res.setHeader('Location', '/about' ); // redirect
                res.end();
                break;
        default: 
            path += '404.html'; 
            res.statusCode = 404;
            break;   
    }

    // send an html file
    //fs.readFile('./views/index.html', (err, data) => {
    fs.readFile(path, (err, data) => { //this line for 404, about & index case scenario
        
        if (err) {
            console.log (err);
            res.end();
        } else {
            // res.write(data);
            // res.end();
            //or
           
            res.end(data); //only without res.write(data); Can do this because we are only using it once.
        }
    }); 
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});
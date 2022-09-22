const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

//<username>:<password>@nodetts.vlcpoy0.mongodb.net/?retryWrites=true&w=majority

const app = express(); // create an instance of an express app

// connect to mongodb...from Mongobd website connect... <username>:<password>@nodetts.vlcpoy0.mongodb.net/?retryWrites=true&w=majority
const dbURI = 'mongodb+srv://netninja:net1234@nodetts.vlcpoy0.mongodb.net/?retryWrites=true&w=majority';
//const dbURI = "mongodb-database";


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// listen for requests
//app.listen(3000); //returns an instance of the server

// middleware & static files
app.use(express.static('public')); //anything in public folder is made available to the front end
app.use(express.urlencoded({ extended: true})); // takes all url encoded data and passes it into an object that we can use on the request object
app.use(morgan('dev'));

// // mongoose and mongo sandbox routes
// app.get('add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//     .then((result) = {
//         res.send(result)

//     });
//     .catch((err) => {
//         console.log(err);
//     });
// });

// app.get('/all-blogs', (req,res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })

// app.get('/single-blog', (req,res) => {
//     Blog.findById('1234567890Sample')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname );
//     console.log('path: ', req.path);
//     console.log('method: ', req.method );
//     next();
// });    

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });  

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// ROUTES
// can use res.send() method in express - infers status code, header and type - now run... nodemon app
app.get('/', (req, res) => {
    
    //res.send('<p>home page</p>'); // infers the type and header. Do not need the... res.setHeader('Content-Type', 'text/html'); 
    //res.sendFile('./views/index.html', { root: __dirname });
    // ejs render a view
    //res.render('index'); // for index.ejs file, enter only index
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor st amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor st amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor st amet consectetur'},
    // ];
    //res.render('index', { title: 'Home', blogs});
    res.redirect('/blogs');
});

app.get('/about', (req, res)=> {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About'});
});    

// redirects...
//app.get('/about-us', (req, res)=> {
//  res.redirect('about');
//});




// app.get('/', (req, res) => {
//     res.redirect('/blogs');
//   });

// blog routes - where we scope the routes
app.use('/blogs', blogRoutes);

//404.page - app.use is used to fire middleware functions in express. it saids to use this function to check every request. If no response before it, it executes. This must go at the bottom.
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', { title: '404'});
});

const express = require('express');
const blogController = require('../controllers/blogController');
//const Blog = require('.models/blog');
//const { append } = require('express/lib/response');

const router = express.Router();

// blog routes

router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create_post);

router.get('/create', blogController.blog_create_get);

router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);


//append.use(blogRoutes);

module.exports = router;
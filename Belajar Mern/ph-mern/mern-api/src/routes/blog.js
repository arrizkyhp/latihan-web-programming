const express = require('express');
const { body } = require('express-validator')

const router = express.Router();

const blogController = require('../controllers/blog')

// CREATE ARTIKEL : /v1/blog/post
router.post('/post', [
    body('title').isLength({ min: 5 }).withMessage('input Judul minimal 5 karakter'), 
    body('body').isLength({ min: 5 }).withMessage('input Artikel minimal 5 karakter')], 
    blogController.createBlogPost)

// READ ALL ARTIKEL
router.get('/posts', blogController.getAllBlogPost);

// READ ARTIKEL BY ID
router.get('/post/:postId', blogController.getBlogPostById)

// UPDATE ARTIKEL (PUT)
router.put('/post/:postId',[
    body('title').isLength({ min: 5 }).withMessage('input Judul minimal 5 karakter'), 
    body('body').isLength({ min: 5 }).withMessage('input Artikel minimal 5 karakter')],
     blogController.updateBlogPost)

// DELETE ARTIKEL
router.delete('/post/:postId', blogController.deleteBlogPost)

module.exports = router;
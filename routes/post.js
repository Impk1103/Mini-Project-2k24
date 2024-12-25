const path = require('path');

const express = require('express');

const postController = require('../controllers/post');

const router = express.Router();

router.get('/post', postController.getAddPost);

router.get('/', postController.getPost);

router.post('/post', postController.postAddPost);
console.log("i am here");

router.get('/', postController.getUpvote);

router.post('/post-upvote', postController.postUpvote);

// router.get('/edit-post/:postId', postController.getEditPost);

// router.post('/edit-post', postController.postEditPost);

// router.post('/delete-post', postController.postDeletePost);

module.exports = router;
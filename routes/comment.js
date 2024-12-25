const path = require('path');

const express = require('express');

const commentController = require('../controllers/comment');

const router = express.Router();

router.get('/add-comment', commentController.getAddComment);

router.get('/comment', commentController.getComment);

router.post('/comment', commentController.postAddComment);
console.log("i am here");

// router.get('/edit-post/:postId', adminController.getEditComment);

// router.post('/edit-post', adminController.postEditComment);


// router.post('/delete-post', adminController.postDeleteComment);

module.exports = router;
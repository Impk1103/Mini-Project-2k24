const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/login', userController.getAddUser);

router.get('/profile', userController.getUser);

router.post('/add-user', userController.postAddUser);

// router.get('/edit-post/:postId', adminController.getEditPost);

// router.post('/edit-post', adminController.postEditPost);

// router.post('/delete-post', adminController.postDeletePost);

module.exports = router;

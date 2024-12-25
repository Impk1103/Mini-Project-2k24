
const Comment = require('../models/comments');
 
exports.getAddComment = (req, res, next) => {
  res.render('shop/comment', {
    pageTitle: 'Comment Section',
    path: '/comment',
    editing: false
  });
};

exports.postAddComment = (req, res, next) => {
  const text = req.body.comment;
  const comment = new Comment(text);
  comment.save()
  .then(result => {
    console.log('Created new comment');
    res.redirect('/comment');
  }).catch(err => console.log(err));
};


// // exports.getEditPost = (req, res, next) => {
// //   const editMode = req.query.edit;
// //   if (!editMode) {
// //     return res.redirect('/');
// //   }
// //   const prodId = req.params.postId;
// //   Product.findById(prodId)
// //   .then(post => {
// //     if(!post){
// //       return res.redirect('/');
// //     }
// //     res.render('admin/edit-post' ,{
// //       pageTitle: "Edit Post",
// //       path:"/admin/edit-post",
// //       editing: editMode,
// //       product: post
// //     });
// //   }).catch(err => console.log(err));
// // };

// // exports.postEditPost = (req, res, next) => {
// //   const prodId = req.body.productId;
// //   const updatedTitle = req.body.title;
// //   const updatedImageUrl = req.body.imageUrl;
// //   const updatedDesc = req.body.description;
  
// //     const product = new Product(updatedTitle, updatedDesc, updatedImageUrl, prodId);
// //     product.save().then(result =>
// //   {
// //     console.log('Updated post')
// //     res.redirect('/admin/post');
// //   }
// //   ).catch(err => console.log(err));
// // };

exports.getComment = (req, res, next) => {
  Comment.fetchAll().then(comment => {
    res.render('shop/comment', {
      comments: comment,
      pageTitle: 'Comment Section',
      path: '/comment'
    });
  }).catch(err => console.log(err));
};

// // exports.postDeletePost = (req, res, next) => {
// //   const prodId = req.body.postId;
// //   Product.deleteById(prodId).then(() =>{
// //     console.log("Deleted Post");
// //     res.redirect('/admin/post');
// //   }).catch(err => console.log(err));
// // };


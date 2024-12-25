
const Post = require('../models/post');
 
exports.getAddPost = (req, res, next) => {
  res.render('shop/post', {
    pageTitle: 'Add Post',
    path: '/post',
    editing: false
  });
};

exports.postAddPost = (req, res, next) => {
  const tag = req.body.tag;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const upvotes = req.body.upvotes;
  const post = new Post(tag, title, description, imageUrl, upvotes);
  post.save()
  .then(result => {
    console.log('Created new post');
    res.redirect('/');
  }).catch(err => console.log(err));
};

exports.getUpvote = (req, res, next) => {
  const postId = req.params.postId;

  Post.findById(postId)
    .then((post) => {
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json({ upvotes: post.upvotes });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Error fetching upvotes', error: err });
    });
};

exports.postUpvote = (req, res, next) => {
  const postId = req.body.postId;

  Post.upvote(postId)
    .then(() => {
      console.log('Upvoted!!!');
      res.redirect('/'); 
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Error upvoting the post', error: err });
    });
};

// exports.getEditPost = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect('/');
//   }
//   const prodId = req.params.postId;
//   Product.findById(prodId)
//   .then(post => {
//     if(!post){
//       return res.redirect('/');
//     }
//     res.render('admin/edit-post' ,{
//       pageTitle: "Edit Post",
//       path:"/admin/edit-post",
//       editing: editMode,
//       product: post
//     });
//   }).catch(err => console.log(err));
// };

// exports.postEditPost = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;
  
//     const product = new Product(updatedTitle, updatedDesc, updatedImageUrl, prodId);
//     product.save().then(result =>
//   {
//     console.log('Updated post')
//     res.redirect('/admin/post');
//   }
//   ).catch(err => console.log(err));
// };

exports.getPost = (req, res, next) => {
  Post.fetchAll().then(post => {
    res.render('shop/home', {
      prods: post,
      pageTitle: 'Complaints and Suggestions',
      path: '/'
    });
  }).catch(err => console.log(err));
};

// exports.postDeletePost = (req, res, next) => {
//   const prodId = req.body.postId;
//   Product.deleteById(prodId).then(() =>{
//     console.log("Deleted Post");
//     res.redirect('/admin/post');
//   }).catch(err => console.log(err));
// };


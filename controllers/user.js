
const User = require('../models/user');
 
exports.getAddUser = (req, res, next) => {
  res.render('shop/login', {
    pageTitle: 'Login Page',
    path: '/login',
    editing: false
  });
};

exports.postAddUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const pwd = req.body.pwd;
  const priority = req.body.priority;
  const user = new User(name, email, pwd, priority);
  user.save()
  .then(result => {
    console.log('Created new user');
    res.redirect('/profile');
  }).catch(err => console.log(err));
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

exports.getUser = (req, res, next) => {
  User.fetchAll().then(user => {
    res.render('shop/profile', {
      prods: user,
      pageTitle: 'Profile',
      path: '/profile'
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


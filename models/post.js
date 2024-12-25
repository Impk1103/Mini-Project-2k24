const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
console.log("ok")
class Post {
   constructor(tag,title, description, imageUrl, upvotes=0, id){
    this.tag = tag;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.upvotes = upvotes;
    this._id = id ? new mongodb.ObjectId(id) : null; 
   }

   save() {
      const db = getDb();
      let dbOp;
  
      if (this._id) {
        // Update existing post
        dbOp = db.collection('post').updateOne(
          { _id: this._id },
          { $set: this }
        );
      } else {
        // Create new post
        dbOp = db.collection('post').insertOne(this);
      }
  
      return dbOp
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  
    static upvote(postId) {
      const db = getDb();
      return db
        .collection('post')
        .updateOne(
          { _id: new mongodb.ObjectId(postId) },
          { $inc: { upvotes: 1 } } // Increment the upvote count by 1
        )
        .then((result) => console.log('Upvoted:', result))
        .catch((err) => console.log(err));
    }


   static fetchAll() {
    const db = getDb();
    return db.collection('post').find().toArray().then(post => {
      console.log(post);
      return post;
    }).catch( err => console.log(err));
   }

   static findById(prodId){
      const db = getDb();
      return db.collection('post').find({_id: new mongodb.ObjectId(prodId)}).next().then(post => {
         console.log(post);
         return post;
      }).catch(err => console.log(err))
   }

   static deleteById(prodId){
    const db = getDb();
    return db.collection('post').deleteOne({_id: new mongodb.ObjectId(prodId)}).catch(err => console.log(err));
   }
}

module.exports = Post;

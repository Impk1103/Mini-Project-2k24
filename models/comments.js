const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
console.log("ok")
class Comment {
   constructor(text, id){
    this.text = text;
    this._id = id ? new mongodb.ObjectId(id) : null; 
   }

   save(){
    const db = getDb();
    let dbOp;
      return dbOp = db.collection('comment').insertOne(this).then(result => console.log(result)).catch( err => console.log(err));
      console.log("comment created");
   }

   static fetchAll() {
    const db = getDb();
    return db.collection('comment').find().toArray().then(comment => {
      console.log(comment);
      return comment;
    }).catch( err => console.log(err));
   }

//    static findById(prodId){
//       const db = getDb();
//       return db.collection('post').find({_id: new mongodb.ObjectId(prodId)}).next().then(post => {
//          console.log(post);
//          return post;
//       }).catch(err => console.log(err))
//    }

//    static deleteById(prodId){
//     const db = getDb();
//     return db.collection('post').deleteOne({_id: new mongodb.ObjectId(prodId)}).catch(err => console.log(err));
//    }
}

module.exports = Comment;

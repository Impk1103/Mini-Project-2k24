const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const Objectid = mongodb.ObjectId;

class User {
    constructor(username, email, pwd, priority, id) {
        this.name = username;
        this.email = email;
        this.pwd = pwd;
        this.priority = priority;
        this._id = id;
    }

    save() {
        const db = getDb();
        let dbOp;
    
        if (this._id) {
          // Update existing post
          dbOp = db.collection('user').updateOne(
            { _id: this._id },
            { $set: this }
          );
        } else {
          // Create new post
          dbOp = db.collection('user').insertOne(this);
        }
    
        return dbOp
          .then((result) => console.log(result))
          .catch((err) => console.log(err));
      }

    static findById(userId) {
        const db = getDb();
        return db.collection('user').findOne({_id: new Objectid(userId)});
    }
    static fetchAll() {
        const db = getDb();
        return db.collection('user').find().toArray().then(user => {
          console.log(user);
          return user;
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

module.exports = User;
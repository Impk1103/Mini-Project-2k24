const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;

const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const userRoutes = require('./routes/user');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(postRoutes);
app.use(commentRoutes);
app.use(userRoutes);

mongoConnect((client)=>{
    app.listen(8000);
});
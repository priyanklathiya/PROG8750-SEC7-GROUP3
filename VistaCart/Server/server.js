const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = new express();
app.use(express.static(path.resolve(__dirname + '/public')))

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded())
app.use(express.json());

// global session variable

app.use(expressSession({
    secret: 'session key abc', // secret key used to encrypt the session cookie
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

global.userSessionId = null;
global.UserType = null;

app.use("*",(req,res,next)=>{
    userSessionId = req.session.userId;
    UserType = req.session.UserType;
    next();
})



const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
     { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connection Successfull'))
    .catch((err) => {
        console.error(err);
    });

// image path
app.use('/Images', express.static('Images'));

//  routers of the application
const productRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const categoryRoutes = require('./routes/category');

app.use('/api/products', productRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/category', categoryRoutes);

app.listen(port, ()=>{
    console.log(`App listening on port: ${port}`);
})
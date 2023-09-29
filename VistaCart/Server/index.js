const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const expressSession = require('express-session');
const flash = require('connect-flash');



// connection string

mongoose.connect('mongodb+srv://Test123:Test123@cluster0.ffh2s.mongodb.net/Vistacart?retryWrites=true&w=majority',
     { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connection Successfull'))
    .catch((err) => {
        console.error(err);
    });



const app = new express();

app.use(express.static(path.resolve(__dirname + '/public')))
app.use(bodyParser.urlencoded())
app.use(flash()) // using flash to pass msg only one time
app.use(express.json());
app.set('view engine', 'ejs'); 


//controller




// middleware






// global session variable

app.use(expressSession({
    secret: 'session key abc'
}));

global.userSessionId = null;

global.UserType = null;

app.use("*",(req,res,next)=>{
    userSessionId = req.session.userId;
    UserType = req.session.UserType;
    next();
})

//  routers of the application

app.get('/', (req, res) => {
    res.render('Dashboard');
});

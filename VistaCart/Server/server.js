const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

require('dotenv').config();

const app = new express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
     { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connection Successfull'))
    .catch((err) => {
        console.error(err);
    });

//  routers of the application
const productRoutes = require('./routes/products');

app.use('/api/products', productRoutes);

app.listen(port, ()=>{
    console.log(`App listening on port: ${port}`);
})
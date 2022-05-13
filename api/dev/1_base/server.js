const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config')

const app = express();
app.use(express.json());

//setting up our server file to serve static content which will be generated from React app in production. This will work in production.

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client','build',index.html));
    })
}

//connecting mongoDB and then running server on port 4000
const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;
mongoose.connect(dbURI, { useNewURLParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then((result) => app.listen(port))
.catch((err) => console.log(err));
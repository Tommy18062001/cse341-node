const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const contactsRoute = require('./routes/contacts')

const dotenv = require('dotenv'); // access env variables
dotenv.config()

// connect to the mongoDB datase
mongoose.connect(process.env.mongodb_uri,
{useNewUrlParser: true}, (err, res)=> {
    if (err) {
        console.log('Connection failed: ' + err);
     }
     else {
        console.log('Connection to database successful!');
     }
})

const app = express()
const port = 3000

app
.use(bodyParser.json())
.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
.use('/', contactsRoute)

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})
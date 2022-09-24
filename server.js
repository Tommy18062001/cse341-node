const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const contactsRoute = require('./routes/contacts')

const dotenv = require('dotenv'); // access env variables
dotenv.config()


// require the swagger ui express
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

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
.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
.use(bodyParser.json())
.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
.use('/contacts', contactsRoute)

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})
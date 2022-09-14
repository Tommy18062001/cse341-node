const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Jennifer Sylvianne');
})

module.exports = routes;
const routes = require('express').Router();
const contactsController = require("../controllers/contacts")

// get request for all the contacts in the database
routes.get('/', contactsController.getAllContact)

// get request for a specific contact
routes.get('/:id', contactsController.getOneContact)

module.exports = routes;
const routes = require('express').Router();
const contactsController = require("../controllers/contacts")

// get request for all the contacts in the database
routes.get('/', contactsController.getAllContact)

// get request for a specific contact
routes.get('/:id', contactsController.getOneContact)

// post request
routes.post('/post', contactsController.createContact)

// put request
routes.put('/:id', contactsController.updateContact)

// delete request
routes.delete('/:id', contactsController.deleteContact)


module.exports = routes;
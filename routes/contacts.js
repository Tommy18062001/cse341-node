const routes = require('express').Router();
const contactsController = require("../controllers/contacts")

// get request for all the contacts in the database
routes.get('/contacts', contactsController.getAllContact)

// get request for a specific contact
routes.get('/contacts/:id', contactsController.getOneContact)

// post request
routes.post('/contacts', contactsController.createContact)

// put request
routes.put('/contacts/:id', contactsController.updateContact)

// delete request
routes.delete('/contacts/:id', contactsController.deleteContact)


module.exports = routes;
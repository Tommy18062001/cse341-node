// controllers
const Contact = require('../modules/contact');

// get all contact in the database
const getAllContact = async (req, res, next) => {
    Contact.find()
    .then(contactList => {
        res.status(200).json({contacts: contactList})
    })
    .catch(error => {
        res.status(500).json({error: error})
    })
}

// get one contact depending on the id
const getOneContact = async (req, res, next) => {
    // access the id in the query parameter
    const contactId = req.params.id;

    Contact.find({ _id: contactId })
    .then(contact => {
        res.status(200).json({contact: contact})
    })
    .catch(error => {
        res.status(500).json({error: error})
    })
}

module.exports = { getAllContact, getOneContact }
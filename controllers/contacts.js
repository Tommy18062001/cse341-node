// controllers
const Contact = require("../modules/contact");

// GET REQUEST
const getAllContact = async (req, res, next) => {
  Contact.find()
    .then((contactList) => {
      res.status(200).json(contactList);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

// GET REQUEST depending on a specific ID
const getOneContact = async (req, res, next) => {
  // access the id in the query parameter
  const contactId = req.params.id;

  Contact.find({ _id: contactId })
    .then((contact) => {
      res.status(200).json(contact);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

// POST REQUEST
const createContact = async (req, res, next) => {

  // create a template for a new contact
  const contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  });

  // mongodb method to save
  contact.save()
    .then((createdContact) => {
      res.status(201).json(createdContact);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

// PUT REQUEST
const updateContact = async (req, res, next) => {
  const contactId = req.params.id;

  // find the contact to update
  Contact.findOne({ _id: contactId })
    .then((contact) => {
      contact.firstName = req.body.firstName;
      contact.lastName = req.body.lastName;
      contact.email = req.body.email;
      contact.favoriteColor = req.body.favoriteColor;
      contact.birthday = req.body.birthday;

      Contact.updateOne({ _id: contactId }, contact)
        .then((result) => {
          // 204 if the test was successfully
          res.status(204).json({message: "Update successfull"});
        })
        .catch((error) => {
          res.status(500).json({ error: error });
        });
    })

    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

// DELETE REQUEST
const deleteContact = async (req, res, next) => {
  const contactId = req.params.id;

  Contact.findOne({ _id: contactId })
    .then((contact) => {
      contact
        .deleteOne({ _id: contactId })
        .then((result) => {
          res.status(200).json({ message: "Contact Deleted successfull" });
        })
        .catch((error) => {
          res.status(500).json({ error: error });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};


module.exports = {
  getAllContact,
  getOneContact,
  createContact,
  updateContact,
  deleteContact,
};
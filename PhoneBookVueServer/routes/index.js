var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", {title: "Телефонная книга"});
});

var contacts = [];
var nextContactId = 1;

router.get("/api/getContacts", function (req, res) {
    var term = (req.query.term || "").toUpperCase();

    var filteredContacts = term.length === 0
        ? contacts
        : contacts.filter(function (contact) {
            return contact.surname.toUpperCase().includes(term)
                || contact.name.toUpperCase().includes(term)
                || contact.phone.toUpperCase().includes(term);
        });

    res.send(filteredContacts);
});

router.post("/api/createContact", function (req, res) {
    var newContact = req.body.contact;

    if (!newContact) {
        res.send({
            success: false,
            message: "Неверный формат запроса"
        });

        return;
    }

    if (!newContact.surname) {
        res.send({
            success: false,
            message: "Необходимо указать фамилию"
        });

        return;
    }

    if (!newContact.name) {
        res.send({
            success: false,
            message: "Необходимо указать имя"
        });

        return;
    }

    if (!newContact.phone) {
        res.send({
            success: false,
            message: "Необходимо указать телефон"
        });

        return;
    }

    if (contacts.some(function (contact) {
        return contact.phone.toUpperCase() === newContact.phone.toUpperCase();
    })) {
        res.send({
            success: false,
            message: "Контакт с указанным телефоном уже существует"
        });

        return;
    }

    contacts.push({
        id: nextContactId,
        surname: newContact.surname,
        name: newContact.name,
        phone: newContact.phone
    });

    nextContactId++;

    res.send({
        success: true,
        message: null
    });
});

router.post("/api/deleteContact", function (req, res) {
    var id = req.body.id;

    contacts = contacts.filter(function (contact) {
        return contact.id !== id;
    });

    res.send({
        success: true,
        message: null
    });
});

module.exports = router;
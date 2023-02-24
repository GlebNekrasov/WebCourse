function get(url, data) {
    return $.get(url, data);
}

function post(url, data) {
    return $.post({
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json"
    });
}

function PhoneBookService() {
}

PhoneBookService.prototype.baseUrl = "/api/";

PhoneBookService.prototype.getContacts = function (term) {
    return get(this.baseUrl + "getContacts", {term: term})
}

PhoneBookService.prototype.createContact = function (contact) {
    return post(this.baseUrl + "createContact", {contact: contact})
}

PhoneBookService.prototype.deleteContact = function (id) {
    return post(this.baseUrl + "deleteContact", {id: id})
}

new Vue({
    el: "#app",

    data: {
        contacts: [],
        selectedIds: [],
        surname: "",
        name: "",
        phone: "",
        term: "",
        service: new PhoneBookService(),
        phoneErrorMessage: "",
        isSurnameInvalid: false,
        isNameInvalid: false,
        isPhoneInvalid: false,
        isNewContactInvalid: false,
        isAllContactsSelected: false
    },

    created: function () {
        this.loadContacts();
    },

    methods: {
        loadContacts: function () {
            var self = this;

            this.service.getContacts(this.term.trim()).done(function (contacts) {
                self.contacts = contacts;
            }).fail(function () {
                alert("Не получилось загрузить список контактов");
            });
        },

        clearFilter: function () {
            this.term = "";
            this.loadContacts();
        },

        createContact: function () {
            var contactSurname = this.surname.trim();
            var contactName = this.name.trim();
            var contactPhone = this.phone.trim();
            var self = this;

            if (contactSurname.length === 0) {
                this.isSurnameInvalid = true;
                this.isNewContactInvalid = true;
            } else {
                this.isSurnameInvalid = false;
            }

            if (contactName.length === 0) {
                this.isNameInvalid = true;
                this.isNewContactInvalid = true;
            } else {
                this.isNameInvalid = false;
            }

            if (contactPhone.length === 0) {
                this.isPhoneInvalid = true;
                this.phoneErrorMessage = "Необходимо заполнить поле";
                this.isNewContactInvalid = true;
            } else {
                this.isPhoneInvalid = false;
            }

            if (this.isNewContactInvalid) {
                this.isNewContactInvalid = false;
                return;
            }

            this.isNewContactInvalid = false;

            var request = {
                surname: this.surname,
                name: this.name,
                phone: this.phone
            }

            this.service.createContact(request).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                self.loadContacts();

                self.surname = "";
                self.name = "";
                self.phone = "";
            }).fail(function () {
                alert("Не получилось создать контакт");
            });
        },

        deleteContact: function (contact) {
            var self = this;

            this.service.deleteContact(contact.id).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                self.loadContacts();
            }).fail(function () {
                alert("Не получилось удалить контакт");
            });
        },

        deleteSelectedContacts: function () {
            var self = this;

            this.selectedIds.forEach(function (contactId) {
                self.service.deleteContact(contactId).done(function (response) {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }

                    self.loadContacts();
                }).fail(function () {
                    alert("Не получилось удалить контакт");
                });
            })
        },

        toggleAllContactsSelected: function () {
            this.selectedIds.splice(0);

            if (this.isAllContactsSelected) {
                return;
            }

            self = this;

            this.contacts.forEach(function (contact) {
                self.selectedIds.push(contact.id);
            });
        }
    }
});
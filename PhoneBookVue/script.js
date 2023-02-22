new Vue({
    el: "#app",

    data: {
        contacts: [],
        newContact: {
            surname: "",
            name: "",
            phone: ""
        },
        phoneErrorMessage: "",
        isSurnameInvalid: false,
        isNameInvalid: false,
        isPhoneInvalid: false,
        isNewContactInvalid: false,
        nextContactId: 1
    },

    methods: {
        isPhoneExist: function (searchedPhone) {
            return this.contacts.some(function (contact) {
                return contact.phone.toLowerCase() === searchedPhone.toLowerCase();
            });
        },

        addContact: function () {
            var contactSurname = this.newContact.surname.trim();
            var contactName = this.newContact.name.trim();
            var contactPhone = this.newContact.phone.trim();

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
            } else if (this.isPhoneExist(contactPhone)) {
                this.isPhoneInvalid = true;
                this.phoneErrorMessage = "Контакт с таким номером уже существует";
                this.isNewContactInvalid = true;
            } else {
                this.isPhoneInvalid = false;
            }

            if (this.isNewContactInvalid) {
                this.isNewContactInvalid = false;
                return;
            }

            this.contacts.push({
                id: this.nextContactId,
                surname: contactSurname,
                name: contactName,
                phone: contactPhone
            });

            this.isNewContactInvalid = false;
            this.nextContactId++;
            this.newContact.surname = "";
            this.newContact.name = "";
            this.newContact.phone = "";
        },

        deleteContact: function (contactIndex) {
            this.contacts.splice(contactIndex, 1);
        }
    }
});
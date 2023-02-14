new Vue({
    el: "#app",

    data: {
        contacts: [],
        newContact: {
            surname: "",
            name: "",
            phone: ""
        },
        errorSurname: "",
        errorName: "",
        errorPhone: "",
        isSurnameInvalid: false,
        isNameInvalid: false,
        isPhoneInvalid: false,
        isNewContactInvalid: false,
        contactId: 1
    },

    methods: {
        addContact: function () {
            var contactSurname = this.newContact.surname.trim();
            var contactName = this.newContact.name.trim();
            var contactPhone = this.newContact.phone.trim();
            var surnameError = $("#surname-error");
            var nameError = $("#name-error");
            var phoneError = $("#phone-error");
            var that = this;

            function addErrorData(errorField) {
                errorField.show();
                that.isNewContactInvalid = true;
            }

            function isPhoneExist(searchedPhone, contactsArray) {
                return contactsArray.some(function (contact) {
                    return contact.phone.toLowerCase() === searchedPhone.toLowerCase();
                });
            }

            if (contactSurname.length === 0) {
                this.isSurnameInvalid = true;
                this.errorSurname = "Необходимо заполнить поле";
                addErrorData(surnameError);
            } else {
                surnameError.hide();
                this.isSurnameInvalid = false;
            }

            if (contactName.length === 0) {
                this.isNameInvalid = true;
                this.errorName = "Необходимо заполнить поле";
                addErrorData(nameError);
            } else {
                nameError.hide();
                this.isNameInvalid = false;
            }

            if (contactPhone.length === 0) {
                this.isPhoneInvalid = true;
                this.errorPhone = "Необходимо заполнить поле";
                addErrorData(phoneError);
            } else if (isPhoneExist(contactPhone, this.contacts)) {
                this.isPhoneInvalid = true;
                this.isNewContactInvalid = true;
                this.errorPhone = "Контакт с таким номером уже существует";
                phoneError.show();
            } else {
                phoneError.hide();
                this.isPhoneInvalid = false;
            }

            if (this.isNewContactInvalid) {
                this.isNewContactInvalid = false;
                return;
            }

            this.contacts.push({
                id: this.contactId,
                surname: contactSurname,
                name: contactName,
                phone: contactPhone
            });

            this.isNewContactInvalid = false;
            this.contactId++;
            this.newContact.surname = "";
            this.newContact.name = "";
            this.newContact.phone = "";
        },

        deleteContact: function (contactIndex) {
            this.contacts.splice(contactIndex, 1);
        }
    }
});
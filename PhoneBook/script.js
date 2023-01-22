$(document).ready(function () {
    var contactsTable = $("#table-content");
    var surnameField = $("#surname");
    var nameField = $("#name");
    var phoneField = $("#phone");
    var phones = [];
    var errorSurnameBlock = $("[for='surname']").siblings(".error-message");
    var errorNameBlock = $("[for='name']").siblings(".error-message");
    var errorPhoneBlock = $("[for='phone']").siblings(".error-message");

    $(".add-button").click(function (e) {
        e.preventDefault();

        errorSurnameBlock.text("");
        errorNameBlock.text("");
        errorPhoneBlock.text("");
        $(".invalid-field").removeClass("invalid-field");

        var surname = surnameField.val().trim();
        var name = nameField.val().trim();
        var phone = phoneField.val().trim();
        var isError = false;

        function addErrorData(errorBlock, invalidField) {
            errorBlock.text("Необходимо заполнить поле");
            invalidField.addClass("invalid-field");
            isError = true;
        }

        if (surname.length === 0) {
            addErrorData(errorSurnameBlock, surnameField);
        }

        if (name.length === 0) {
            addErrorData(errorNameBlock, nameField);
        }

        if (phone.length === 0) {
            addErrorData(errorPhoneBlock, phoneField);
        } else if (phones.indexOf(phone) !== -1) {
            errorPhoneBlock.text("Контакт с таким номером уже существует");
            phoneField.addClass("invalid-field");
            isError = true;
        }

        if (isError) {
            return;
        }

        surnameField.val("");
        nameField.val("");
        phoneField.val("");

        phones.push(phone);

        var currentRowNumber = phones.length;
        var numberCell = $("<td class='width-center row-number'></td>").text(currentRowNumber);
        var surnameCell = $("<td></td>").text(surname);
        var nameCell = $("<td></td>").text(name);
        var phoneCell = $("<td></td>").text(phone);
        var buttonCell = $("<td class='width-center'></td>");
        var deleteButton = $("<button class='delete-button' type='submit'>Удалить</button>");

        buttonCell.append(deleteButton);

        var row = $("<tr></tr>");

        contactsTable.append(row);

        row
            .append(numberCell)
            .append(surnameCell)
            .append(nameCell)
            .append(phoneCell)
            .append(buttonCell);

        deleteButton.click(function (e) {
            var deletedRowNumber = Number(numberCell.text());

            row.remove();

            e.stopImmediatePropagation();

            phones = phones.filter(function (existingPhone) {
                return existingPhone !== phone;
            });

            if (deletedRowNumber === phones.length + 1) {
                return;
            }

            var numberCells = $(".row-number");

            for (var i = deletedRowNumber - 1; i <= phones.length - 1; ++i) {
                var currentNumberCell = numberCells[i];
                currentNumberCell.textContent = i + 1;
            }
        });
    });
});
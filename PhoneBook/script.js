$(document).ready(function () {
    var surnameField = $("#surname");
    var nameField = $("#name");
    var phoneField = $("#phone");
    var phones = [];
    var errorSurnameBlock = $("[for='surname']").next().next();
    var errorNameBlock = $("[for='name']").next().next();
    var errorPhoneBlock = $("[for='phone']").next().next();
    var isError = false;
    var lastRowNumber = 0;

    $(".add-button").click(function (e) {
        e.preventDefault();

        errorSurnameBlock.text("");
        errorNameBlock.text("");
        errorPhoneBlock.text("");
        $(".invalid-field").removeClass("invalid-field");

        var surname = surnameField.val().trim();
        var name = nameField.val().trim();
        var phone = phoneField.val().trim();

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
        } else if ($.inArray(phone, phones) !== -1) {
            errorPhoneBlock.text("Контакт с таким номером уже существует");
            phoneField.addClass("invalid-field");
            isError = true;
        }

        if (isError) {
            isError = false;
            return;
        }

        surnameField.val("");
        nameField.val("");
        phoneField.val("");

        ++lastRowNumber;

        phones.push(phone);

        var currentRowNumber = lastRowNumber;
        var numberCell = $("<td class='width-center row-number'></td>").text(currentRowNumber);
        var surnameCell = $("<td></td>").text(surname);
        var nameCell = $("<td></td>").text(name);
        var phoneCell = $("<td></td>").text(phone);
        var buttonCell = $("<td class='width-center'></td>");
        var deleteButton = $("<button class='delete-button' type='submit'>Удалить</button>");

        numberCell.prop("id", currentRowNumber);

        buttonCell.append(deleteButton);

        var row = $("<tr></tr>");

        $("#table-content").append(row);

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

            phones = $.grep(phones, function (existingPhone) {
                return existingPhone !== phone;
            })

            if (deletedRowNumber === lastRowNumber) {
                --lastRowNumber;
                return;
            }

            for (var i = deletedRowNumber + 1; i <= lastRowNumber; ++i) {
                var currentNumberCell = $("#" + i);
                currentNumberCell.text(i - 1);
                currentNumberCell.prop("id", i - 1);
            }

            --lastRowNumber;
        });
    });
});
$(document).ready(function () {
    var surnameField = $("#surname");
    var nameField = $("#name");
    var phoneField = $("#phone");
    var surnameLabelText = '"' + $("[for='surname']").text() + '"';
    var nameLabelText = '"' + $("[for='name']").text() + '"';
    var phoneLabelText = '"' + $("[for='phone']").text() + '"';
    var emptyFields = [];
    var errorField = $(".error");
    var lastRowNumber = 0;

    $(".add-button").on("click", function (e) {
        e.preventDefault();

        errorField.text("");
        $(".invalid-field").removeClass("invalid-field");

        var newSurname = surnameField.val();
        var newName = nameField.val();
        var newPhone = phoneField.val();

        function addErrorData (errorText, invalidField) {
            emptyFields.push(errorText);
            invalidField.addClass("invalid-field");
        }

        newSurname.length === 0 ? addErrorData(surnameLabelText, surnameField) : false;
        newName.length === 0 ? addErrorData(nameLabelText, nameField) : false;
        newPhone.length === 0 ? addErrorData(phoneLabelText, phoneField) : false;

        if (emptyFields.length > 0) {
            errorField.text("Необходимо заполнить поле " + emptyFields.join(", "));
            emptyFields = [];
            return;
        }

        surnameField.val("");
        nameField.val("");
        phoneField.val("");

        ++lastRowNumber;

        var currentRowNumber = lastRowNumber;
        var newIdCell = $("<td class='width-center id-number'></td>").text(currentRowNumber);
        var newSurnameCell = $("<td></td>").text(newSurname);
        var newNameCell = $("<td></td>").text(newName);
        var newPhoneCell = $("<td></td>").text(newPhone);
        var newButtonCell = $("<td class='width-center'></td>");
        var newDeleteButton = $("<button class='delete-button' type='submit'>Удалить</button>");

        newIdCell.attr('id', currentRowNumber);

        newButtonCell.append(newDeleteButton);

        var newRow = $("<tr></tr>");

        $("#table-content").append(newRow);

        newRow
            .append(newIdCell)
            .append(newSurnameCell)
            .append(newNameCell)
            .append(newPhoneCell)
            .append(newButtonCell);

        newDeleteButton.on("click", function (e) {
            var deletedRowNumber = Number(newIdCell.text());

            newRow.remove();

            e.stopImmediatePropagation();

            if (deletedRowNumber === lastRowNumber) {
                --lastRowNumber;
                return;
            }

            var i = deletedRowNumber + 1;

            for (i; i <= lastRowNumber; ++i) {
                var currentIdCell = $('#' + i);
                currentIdCell.text(i - 1);
                currentIdCell.attr('id', i - 1);
            }

            --lastRowNumber;
        });
    });
});
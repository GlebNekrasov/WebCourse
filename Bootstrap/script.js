$(document).ready(function () {
    var newTaskField = $("#new-task");
    var errorMessage = $(".error");
    var tasksList = $(".tasks-list");

    $(".add-button").click(function (e) {
        e.preventDefault();

        var newTaskText = newTaskField.val().trim();

        if (newTaskText.length === 0) {
            newTaskField.addClass("is-invalid");
            errorMessage.addClass("invalid-feedback");
            return;
        }

        errorMessage.removeClass("invalid-feedback");
        newTaskField.removeClass("is-invalid");
        newTaskField.val("");

        var newTask = $("<li class='list-group-item text-success text-break px-0 border-0 mb-2 py-0'></li>");

        tasksList.append(newTask);

        function setViewMode() {
            newTask.html("<span></span>\
                <button class='delete-button btn btn-secondary btn-sm' type='button'>Удалить</button>\
                <button class='edit-button btn btn-secondary btn-sm' type='button'>Редактировать</button>");

            newTask.children(":first").text(newTaskText);

            newTask.find(".delete-button").click(function () {
                newTask.remove();
            });

            newTask.find(".edit-button").click(function () {
                setEditMode();
            });
        }

        function setEditMode() {
            newTask.html("<input class='edit-task form-control mb-2' type='text'>\
                    <div class='error mb-2'>Нужно заполнить поле!</div>\
                    <button class='save-button btn btn-secondary btn-sm' type='button'>Сохранить</button>\
                    <button class='cancel-button btn btn-secondary btn-sm' type='button'>Отменить</button>");

            var editTaskField = newTask.find(".edit-task");
            editTaskField.val(newTaskText);

            newTask.find(".cancel-button").click(function () {
                setViewMode();
            });

            newTask.find(".save-button").click(function () {
                var editedTaskText = editTaskField.val().trim();

                if (editedTaskText.length === 0) {
                    newTask.find(".error").addClass("invalid-feedback");
                    editTaskField.addClass("is-invalid");
                    return;
                }

                newTaskText = editedTaskText;
                setViewMode();
            });
        }

        setViewMode();
    });
})
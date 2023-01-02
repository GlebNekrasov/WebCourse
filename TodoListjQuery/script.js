$(document).ready(function () {
    var newTaskField = $("#new-task");
    var errorMessage = $(".error");
    var tasksList = $(".tasks-list");

    $(".add-button").on("click", function (e) {
        e.preventDefault();

        var newTaskText = newTaskField.val().trim();

        if (newTaskText.length === 0) {
            newTaskField.addClass("invalid-field");
            errorMessage.css("display", "block");
            return;
        }

        newTaskField.removeClass("invalid-field");
        errorMessage.css("display", "none");
        newTaskField.val("");

        var newTask = $("<li></li>");
        newTask.addClass("task");

        tasksList.append(newTask);

        function setViewMode() {
            newTask.html("<span></span>\
                <button class='delete-button' type='button'>Удалить</button>\
                <button class='edit-button' type='button'>Редактировать</button>");

            newTask.children(":first").text(newTaskText);

            newTask.find(".delete-button").on("click", function () {
                newTask.remove();
            });

            newTask.find(".edit-button").on("click", function () {
                setEditMode();
            });
        }

        function setEditMode() {
            newTask.html("<input class='edit-task' type='text'>\
                    <button class='save-button' type='button'>Сохранить</button>\
                    <button class='cancel-button' type='button'>Отменить</button>\
                    <div class='error'>Нужно заполнить поле!</div>");

            var editTaskField = newTask.find(".edit-task");
            editTaskField.val(newTaskText);

            newTask.find(".cancel-button").on("click", function () {
                setViewMode();
            });

            newTask.find(".save-button").on("click", function () {
                var editedTaskText = editTaskField.val().trim();

                if (editedTaskText.length === 0) {
                    newTask.find(".error").css("display", "block");
                    editTaskField.addClass("invalid-field");
                    return;
                }

                newTaskText = editedTaskText;
                setViewMode();
            });
        }

        setViewMode();
    });
})
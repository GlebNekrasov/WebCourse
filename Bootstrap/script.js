$(document).ready(function () {
    var newTaskField = $("#new-task");
    var errorMessage = $(".invalid-feedback");
    var tasksList = $(".tasks-list");

    $(".add-button").click(function (e) {
        e.preventDefault();

        var newTaskText = newTaskField.val().trim();

        if (newTaskText.length === 0) {
            newTaskField.addClass("is-invalid");
            errorMessage.show();
            return;
        }

        errorMessage.hide();
        newTaskField.removeClass("is-invalid");
        newTaskField.val("");

        var newTask = $("<li class='list-group-item d-sm-flex align-items-center gap-2 text-success px-0 py-2'></li>");

        tasksList.append(newTask);

        function setViewMode() {
            newTask.html("<span class='task-text text-break'></span>\
                <div class='row flex-nowrap mt-2 mt-sm-0'>\
                <div class='row-cols-1 col-6 col-sm-auto'><button class='edit-button btn btn-secondary btn-sm' type='button'>Редактировать</button></div>\
                <div class='row-cols-1 col-6 col-sm-auto'><button class='delete-button btn btn-danger btn-sm' type='button'>Удалить</button></div>\
                </div>");

            newTask.find(".task-text").text(newTaskText);

            newTask.find(".delete-button").click(function () {
                newTask.remove();
            });

            newTask.find(".edit-button").click(function () {
                setEditMode();
            });
        }

        function setEditMode() {
            newTask.html("<div class='d-sm-flex d-inline-block col-sm col-11 align-items-baseline gap-2 text-success px-0'>\
                <div class='col-sm'>\
                <div class='row'>\
                <div class='col-12'>\
                <input class='edit-task form-control' type='text'>\
                </div>\
                <div class='invalid-feedback col-12'>Нужно заполнить поле!</div>\
                </div>\
                </div>\
                <div class='col-12 col-sm-auto'>\
                <div class='row flex-nowrap mt-2 mt-sm-0'>\
                <div class='row-cols-1 col-6 col-sm-auto'><button class='save-button btn btn-primary btn-sm' type='button'>Сохранить</button></div>\
                <div class='row-cols-1 col-6 col-sm-auto'><button class='cancel-button btn btn-secondary btn-sm' type='button'>Отменить</button></div>\
                </div>\
                </div>\
                </div>");

            var editTaskField = newTask.find(".edit-task");
            editTaskField.val(newTaskText);

            var editErrorMessage = newTask.find(".invalid-feedback");

            newTask.find(".cancel-button").click(function () {
                setViewMode();
            });

            newTask.find(".save-button").click(function () {
                var editedTaskText = editTaskField.val().trim();

                if (editedTaskText.length === 0) {
                    editTaskField.addClass("is-invalid");
                    editErrorMessage.show();
                    return;
                }

                newTaskText = editedTaskText;
                setViewMode();
            });
        }

        setViewMode();
    });
})
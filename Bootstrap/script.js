$(document).ready(function () {
    var newTaskField = $("#new-task");
    var tasksList = $(".tasks-list");

    $(".add-button").click(function (e) {
        e.preventDefault();

        var newTaskText = newTaskField.val().trim();

        if (newTaskText.length === 0) {
            newTaskField.addClass("is-invalid");
            return;
        }

        newTaskField.removeClass("is-invalid");
        newTaskField.val("");

        var newTask = $("<li class='list-group-item d-flex flex-wrap align-items-center gap-2 text-success px-0 py-2'></li>");

        tasksList.append(newTask);

        setViewMode();

        function setViewMode() {
            newTask.html("<span class='col task-text text-break'></span>\
                <div class='col-12 col-sm-7 col-md-5 col-lg-4 col-xl-3'>\
                    <div class='d-flex gap-2'>\
                        <button class='edit-button col btn btn-secondary btn-sm' type='button'>Редактировать</button>\
                        <button class='delete-button col btn btn-danger btn-sm' type='button'>Удалить</button>\
                    </div>\
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
            newTask.html("<div class='col'>\
                    <input class='edit-task form-control' type='text'>\
                    <div class='invalid-feedback'>Нужно заполнить поле!</div>\
                </div>\
                <div class='col-12 col-sm-7 col-md-5 col-lg-4 col-xl-3'>\
                    <div class='d-flex gap-2'>\
                        <button class='save-button col btn btn-primary btn-sm' type='button'>Сохранить</button>\
                        <button class='cancel-button col btn btn-secondary btn-sm' type='button'>Отменить</button>\
                    </div>\
                </div>");

            var editTaskField = newTask.find(".edit-task");
            editTaskField.val(newTaskText);

            newTask.find(".cancel-button").click(function () {
                setViewMode();
            });

            newTask.find(".save-button").click(function () {
                var editedTaskText = editTaskField.val().trim();

                if (editedTaskText.length === 0) {
                    editTaskField.addClass("is-invalid");
                    return;
                }

                newTaskText = editedTaskText;
                setViewMode();
            });
        }
    });
});
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

        var newTask = $("<li class='list-group-item d-sm-flex align-items-center gap-2 text-success px-0 py-2'></li>");

        tasksList.append(newTask);

        function setViewMode() {
            newTask.html("<span class='col-sm task-text text-break'></span>\
                <div class='row flex-nowrap col-sm-7 col-md-5 col-lg-4 col-xl-3 mt-2 mt-sm-0'>\
                    <div class='col-6'><button class='edit-button col-12 btn btn-secondary btn-sm' type='button'>Редактировать</button></div>\
                    <div class='col-6'><button class='delete-button col-12 btn btn-danger btn-sm' type='button'>Удалить</button></div>\
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
            newTask.html("<div class='d-inline-block col-11 d-sm-flex col-sm align-items-baseline gap-2 text-success px-0'>\
                    <div class='row col'>\
                        <div class='col-12'>\
                            <input class='edit-task form-control' type='text'>\
                            <div class='invalid-feedback col-12'>Нужно заполнить поле!</div>\
                        </div>\
                    </div>\
                </div>\
                <div class='row flex-nowrap col-sm-7 col-md-5 col-lg-4 col-xl-3 mt-2 mt-sm-0'>\
                    <div class='col-6'><button class='save-button col-12 btn btn-primary btn-sm' type='button'>Сохранить</button></div>\
                    <div class='col-6'><button class='cancel-button col-12 btn btn-secondary btn-sm' type='button'>Отменить</button></div>\
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

        setViewMode();
    });
});
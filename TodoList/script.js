(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var addButton = document.querySelector(".add-button");

        addButton.addEventListener("click", function (e) {
            e.preventDefault();

            var newTaskField = document.getElementById("new-task");
            var newTaskText = newTaskField.value.trim();
            var errorMessage = document.querySelector(".error");
            var tasksList = document.querySelector(".tasks-list");

            if (newTaskText.length === 0) {
                newTaskField.classList.add("invalid-field");
                errorMessage.style.display = "block";
                return;
            }

            newTaskField.classList.remove("invalid-field");
            errorMessage.style.display = "none";
            newTaskField.value = "";

            var newTask = document.createElement("li");
            newTask.classList.add("task");

            tasksList.appendChild(newTask);

            function setViewMode() {
                newTask.innerHTML = "<span></span>\
                    <button class='delete-button' type='button'>Удалить</button>\
                    <button class='edit-button' type='button'>Редактировать</button>";

                newTask.firstChild.textContent = newTaskText;

                newTask.querySelector(".delete-button").addEventListener("click", function () {
                    newTask.remove();
                });

                newTask.querySelector(".edit-button").addEventListener("click", function () {
                    setEditMode();
                });
            }

            function setEditMode() {
                newTask.innerHTML = "<input class='edit-task' type='text'>\
                    <button class='save-button' type='button'>Сохранить</button>\
                    <button class='cancel-button' type='button'>Отменить</button>\
                    <div class=\"error\">Нужно заполнить поле!</div>";

                var editTaskField = newTask.querySelector(".edit-task");
                editTaskField.value = newTaskText;

                newTask.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                })

                newTask.querySelector(".save-button").addEventListener("click", function () {
                    var editedTaskText = newTask.querySelector(".edit-task").value.trim();

                    if (editedTaskText.length === 0) {
                        newTask.querySelector(".error").style.display = "block";
                        editTaskField.classList.add("invalid-field");
                        return;
                    }

                    newTaskText = editedTaskText;
                    setViewMode();
                })
            }

            setViewMode();
        });
    });
})();
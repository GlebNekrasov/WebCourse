new Vue({
    el: "#app",

    data: {
        items: [],
        newItemText: "",
        isNewItemInvalid: false,
        itemId: 1
    },

    methods: {
        addItem: function () {
            var newTaskText = this.newItemText.trim();
            this.isNewItemInvalid = newTaskText.length === 0;
            var addErrorMessage = $(".add-item-error");
            
            if (this.isNewItemInvalid) {
                addErrorMessage.show();
                return;
            }

            addErrorMessage.hide();

            this.items.push({
                id: this.itemId,
                text: newTaskText,
                editedText: "",
                isEditedItemInvalid: false,
                isEditing: false
            });

            this.itemId++;
            this.newItemText = "";
        },

        deleteItem: function (itemIndex) {
            this.items.splice(itemIndex, 1);
        },

        editItem: function (item) {
            item.editedText = item.text;
            item.isEditing = true;
        },

        saveItem: function (item) {
            var editedTaskText = item.editedText.trim();
            item.isEditedItemInvalid = editedTaskText.length === 0;
            var editErrorMessage = $(".edit-item-error");

            if (item.isEditedItemInvalid) {
                editErrorMessage.show();
                return;
            }

            editErrorMessage.hide();

            item.text = item.editedText;
            item.isEditing = false;
        },

        cancelEditing: function (item) {
            item.isEditing = false;
        }
    }
});
new Vue({
    el: "#app",

    data: {
        items: [],
        newItemText: "",
        isNewItemInvalid: false,
        nextItemId: 1
    },

    methods: {
        addItem: function () {
            this.isNewItemInvalid = this.newItemText.length === 0;
            
            if (this.isNewItemInvalid) {
                return;
            }

            this.items.push({
                id: this.nextItemId,
                text: this.newItemText,
                editedText: "",
                isEditedItemInvalid: false,
                isEditing: false
            });

            this.nextItemId++;
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
            item.isEditedItemInvalid = item.editedText.length === 0;

            if (item.isEditedItemInvalid) {
                return;
            }

            item.text = item.editedText;
            item.isEditing = false;
        },

        cancelEditing: function (item) {
            item.isEditing = false;
            item.isEditedItemInvalid = false;
        }
    }
});
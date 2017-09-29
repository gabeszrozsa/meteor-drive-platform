Meteor.methods({
    deleteFile: function(id) {
        return UploadedFiles.remove(id);
    },
});

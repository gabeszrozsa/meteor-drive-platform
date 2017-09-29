UploadedFiles = new FS.Collection("uploadedFiles", {
    stores: [new FS.Store.FileSystem("uploadedFiles", {path: "~/meteor_uploads"})]
});
UploadedFiles.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc) {
        return true;
    },
    remove: function (userId, doc) {
        return true;
    },
    download: function (userId, doc) {
        return true;
    }
});

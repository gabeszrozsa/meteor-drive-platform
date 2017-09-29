Template.allFiles.helpers({
    allFiles: function () {
        return UploadedFiles.find();
    }
});

Template.allFiles.events({
    'click .delete-file': function (event) {
        Meteor.call("deleteFile", this._id, function(error, result){
            if(error){
                console.log("error", error);
            }
            if(result){
                console.log('deleted');
            }
        });

    }
});

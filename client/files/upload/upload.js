Template.filesUpload.events({
  'change .upload-file': function (event, template) {
    FS.Utility.eachFile(event, function (file) {
      const fileToUpload = new FS.File(file);
      fileToUpload.user = Meteor.userId();

      // TODO: toastr
      UploadedFiles.insert(fileToUpload, function(error, result){
        if(error){
          console.log("error", error);
        }
        if(result){
          console.log('success');
        }
      });
    });
  }
});

// Template.fileUpload.helpers({
//     theFiles: function () {
//         return UploadedFiles.find();
//     }
// });
//
// Template.fileUpload.events({
//     'click #deleteFileButton ': function (event) {
//         Meteor.call("deleteFile", this._id, function(error, result){
//             if(error){
//                 console.log("error", error);
//             }
//             if(result){
//                 console.log('deleted');
//             }
//         });
//
//     },
//     'change .your-upload-class': function (event, template) {
//         console.log("uploading...")
//         FS.Utility.eachFile(event, function (file) {
//             console.log("each file...");
//             var yourFile = new FS.File(file);
//             yourFile.creatorId = 123; // todo
//
//             UploadedFiles.insert(yourFile, function(error, result){
//                 if(error){
//                     console.log("error", error);
//                 }
//                 if(result){
//                     console.log('success');
//                 }
//             });
//         });
//     }
// });

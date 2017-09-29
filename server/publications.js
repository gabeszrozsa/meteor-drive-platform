Meteor.publish('allUsers', function() {
    const users = Meteor.users.find();

    if (users) {
      return users;
    }

    return this.ready();
});


Meteor.publish("uploadedFiles", function () {
  return UploadedFiles.find();
});

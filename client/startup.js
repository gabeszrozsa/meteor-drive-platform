Meteor.startup(function(){
  Meteor.subscribe("allUsers");
  Meteor.subscribe("uploadedFiles");
});

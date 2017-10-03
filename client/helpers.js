Template.registerHelper("loggedIn", function(){
  return Meteor.userId();
});

Template.registerHelper("date", function(date,format){
  return moment(date).format(format);
});

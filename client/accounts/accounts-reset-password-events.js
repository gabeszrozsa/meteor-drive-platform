// Template.resetPassword.events({
//   'click #forget-password': function(event) {
//     const email = $('#email').val();
//     Meteor.call("sendResetPass", email, function(error, result){
//       // NOTE: todo
//     });
//   },
//
//   "click #submit-new-password": function(event, template){
//     const pass = $('#new-password').val();
//     const token = Session.get('resetPassword');
//     Accounts.resetPassword(token, pass, function() {
//       delete Session.keys['resetPassword'];
//     });
//   }
//
// });

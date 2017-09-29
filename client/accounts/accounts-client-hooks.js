// if (Accounts._resetPasswordToken) {
//     Session.set('resetPassword', Accounts._resetPasswordToken);
// }
//
// Accounts.onResetPasswordLink(function(token, done) {
//   done();
// });
//
//
// Accounts.onLogin(function() {
//   const user = Meteor.users.findOne(Meteor.userId());
//   console.log(user);
// });
//
// Accounts.onLoginFailure(function(response) {
//   // NOTE: response.error.reason
//   // "User not found"
//   // "Match failed"
//   // "Incorrect password"
//   // "Login forbidden"
// });
//
// Accounts.onLogout(function() {
//   // NOTE: Logout hook
// });

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
Accounts.onLoginFailure(function(response) {
  let errorMessage = '';

  switch (response.error.reason) {
    case 'User not found':
      errorMessage = 'Nem létezik ilyen felhasználó!';
      break;
    case 'Incorrect password':
      errorMessage = 'Hibás jelszó lett megadva!';
      break;
    case 'Login forbidden':
      errorMessage = 'A bejelentkezés megtiltva!';
      break;
    case 'Match failed':
      errorMessage = 'Sikertelen bejelentkezés!';
      break;
  }

  toastr.error(errorMessage);
});
//
// Accounts.onLogout(function() {
//   // NOTE: Logout hook
// });

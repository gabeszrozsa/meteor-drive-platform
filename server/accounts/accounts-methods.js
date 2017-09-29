Meteor.methods({
//   changeUserPassword: function(data, options) {
//     if (!data.userId) {
//       throw new Meteor.Error(500, 'Hibás felhasználó!');
//     }
//
//     if (!data.pass1) {
//       throw new Meteor.Error(500, 'Az első jelszó üres!');
//     }
//
//     if (!data.pass2) {
//       throw new Meteor.Error(500, 'A második jelszó üres!');
//     }
//
//     if (data.pass2 !== data.pass1) {
//       throw new Meteor.Error(500, 'A két jelszó nem egyezik meg!');
//     }
//
//     Accounts.setPassword(data.userId, data.pass1, options);
//   },
//
  registerUser: function(profile) {
    // TODO: text
    if (!profile.email) {
      throw new Meteor.Error(500, 'no email');
    }
    if (!profile.password) {
      throw new Meteor.Error(500, 'no password');
    }
    if (!profile.username) {
      throw new Meteor.Error(500, 'no username');
    }

    return Accounts.createUser(profile);
  },
//
//   sendResetPass: function(email) {
//     const __data = {};
//     const user = Accounts.findUserByEmail(email);
//     if (user) {
//       const data = {'lastPasswordReset':new Date()};
//       Meteor.users.update(user._id, { $set: data});
//       return Accounts.sendResetPasswordEmail(user._id);
//     } else {
//       throw new Meteor.Error(500, 'Nincs ilyen email cím!');
//     }
//   },
//
});

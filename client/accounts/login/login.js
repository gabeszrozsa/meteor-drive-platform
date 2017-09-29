Template.accountLogin.events({
  'submit #login-form': function(event) {
    event.preventDefault();
    const name = $('#name').val();
    const password = $('#password').val();

    Meteor.loginWithPassword(name, password, function(error) {
      if (!error) {
        Router.go('/');
      }
    });
  }
})

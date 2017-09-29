Router.route('/', function () {
  if (Meteor.userId()) {
    this.render('home', {
      data: function () {
        const currentUser = Meteor.users.findOne(Meteor.userId());

        return { currentUser };
      }
    });
  } else {
    this.redirect('/login');
  }
});

Router.route('/register', function () {
  this.render('accountRegister');
});

Router.route('/login', function () {
  this.render('accountLogin');
});

Router.route('/profile', function () {
  this.render('profile', {
    data: function () {
      const currentUser = Meteor.users.findOne(Meteor.userId());

      return { currentUser };
    }
  });
});

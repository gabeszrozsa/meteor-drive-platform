Template.nav.events({
  'click .logout': function(event) {
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
  }
});

Template.nav.onRendered(function() {
  $(".button-collapse").sideNav();
});

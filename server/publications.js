Meteor.publish('allUsers', function() {
    const users = Meteor.users.find();

    if (users) {
      return users;
    }

    return this.ready();
});

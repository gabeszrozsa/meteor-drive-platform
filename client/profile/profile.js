Template.profile.helpers({
  getEmailAddress: function(){
    return (this.currentUser) ? this.currentUser.emails[0].address : "";
  }
});

Template.changePassword.events({
  'submit #change-password-form': function(event) {
    event.preventDefault();
    const oldPassword = $('#old-password').val();
    const password1 = $('#password-1').val();
    const password2 = $('#password-2').val();
    let newPassword = '';
    // TODO: toastr

    if (password1 === password2) {
      newPassword = password1;
      Accounts.changePassword(oldPassword, newPassword, function(error){
        if (!error) {
          console.log("pass changed!");

        }
      })
    } else {
      console.log("wrong passwords")
    }

  }
})

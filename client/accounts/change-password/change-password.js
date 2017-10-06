Template.changePassword.events({
  'submit #change-password-form': function(event) {
    event.preventDefault();
    const oldPassword = $('#old-password').val();
    const password1 = $('#password-1').val();
    const password2 = $('#password-2').val();
    let newPassword = '';

    if (password1 === password2) {
      newPassword = password1;
      Accounts.changePassword(oldPassword, newPassword, function(error){
        if (!error) {
          toastr.success('A jelszó megváltozott!');

          $('#old-password').val('');
          $('#password-1').val('');
          $('#password-2').val('');

        } else {
          $('#old-password').val('').focus();
          toastr.error('A jelenlegi jelszó hibás!')
        }
      })
    } else {
      toastr.error('A két új jelszó nem egyezik meg!');
      $('#password-2').val('');
      $('#password-1').val('').focus();
    }

  }
})

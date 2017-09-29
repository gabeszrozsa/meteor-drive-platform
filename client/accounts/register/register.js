Template.accountRegister.events({
    'submit #register-form': function(event){
        event.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();
        const username = $('#username').val();

        const profile = { email, password, username };

        if (email && password && username) {
            Meteor.call("registerUser", profile, function(error, result){
                if(error){
                    let errorText = '';

                    switch (error.reason) {
                      // TODO: toastr!
                      // case "Username already exists.":
                      //     errorText = 'Létezik már ilyen név';
                      //     break;
                      // case "Password may not be empty":
                      //     errorText = 'A jelszó nem lehet üres!';
                      //     break;
                      // case "Need to set a username or email":
                      //     errorText = 'Meg kell adnod egy email címet!';
                      //     break;
                      // case "Email already exists.":
                      //     errorText = 'Ez az email cím már létezik!';
                      //     break;
                      default:
                            errorText = error.reason
                    }

                    // toastr.error(errorText);
                    console.log(errorText)
                }
                if(result){
                    // toastr.success('Felhasználó létrehozva!');
                    // $('#register_email').val('');
                    // $('#register_password').val('');
                    // $('#register_name').val('');
                    // $('#account-register').modal('hide');
                    // $('#register_holiday').val('');

                    // TODO: email küldés
                    Meteor.loginWithPassword(username, password, function(error) {
                      if (!error) {
                        Router.go('/');
                      }
                    });

                }
            });
        } else {
          // TODO: toastr
          // toastr.error('Kérlek tölts ki minden mezőt!');
          console.log("empty")
        }

    }
});

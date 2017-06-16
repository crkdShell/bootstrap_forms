$(document).ready(function(){

  //------------
  // jQuery UI
  //------------

  /* Widget - Datepicker */
  $(function() {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
    }).on('change', function() {
        $(this).valid();
    });

    $('#c_btn').click(function() {
      console.log('click');
      $("#datepicker").focus();
    });
  });

  /*Widget - Checkboxradio*/
  $( function() {
    $( "input[type=radio]" ).checkboxradio();
  });

  //---------------
  // JS VALIDATE
  //---------------

  /* form_1 */
  $('#form_1').validate({ // initialize the plugin
      rules: {
          email_1: {
              required: true,
              email: true
          },
          password_1: {
              required: true,
              minlength: 6
          }
      },
      messages: {
        email_1: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        password_1: {
          required: "Enter Password",
          minlength: "Minlength of 6 characters"
        }
      },
      errorPlacement: function (error, element) {
          error.appendTo(element.parent().after());
      },
      submitHandler: function (form) { // for demo
          alert('valid form submitted'); // for demo
          return false; // for demo
      }
  });

  /* form_2 */
  $('#form_2').validate({ // initialize the plugin
      rules: {
          email_2: {
              required: true,
              email: true
          },
          password_2: {
              required: true,
              minlength: 6
          }
      },
      messages: {
        email_2: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        password_2: {
          required: "Enter Password",
          minlength: "Minlength of 6 characters"
        }
      },
      errorPlacement: function (error, element) {
          error.appendTo(element.parent().after());
      },
      submitHandler: function (form) { // for demo
          alert('valid form submitted'); // for demo
          return false; // for demo
      }
  });

  /* form_3 */
  $('#form_3').validate({ // initialize the plugin
      rules: {
          email_3: {
              required: true,
              email: true
          },
          password_3: {
              required: true,
              minlength: 6
          }
      },
      messages: {
        email_3: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        password_3: {
          required: "Enter Password",
          minlength: "Minlength of 6 characters"
        }
      },
      errorPlacement: function (error, element) {
          error.appendTo('.place_error');
      },
      submitHandler: function (form) { // for demo
          alert('valid form submitted'); // for demo
          return false; // for demo
      }
  });

  /* form_4 */
  $('#form_4').validate({ // initialize the plugin
      rules: {
          username_4: {
              required: true,
              minlength: 5
          },
          email_4: {
              email: true,
              required: true
          },
          password_4: {
              required: true,
              minlength: 5
          },
          confirmPassword_4: {
              required: true,
              minlength: 5,
              equalTo: "#password_4"
          },
          firstName_4: {
              required: true,
              minlength: 1
          },
          lastName_4: {
              required: true,
              minlength: 1
          },
          phoneNumber_4: {
            required: true,
            phoneUS: true
          },
          dob_4: {
            required: true
          },
          address_4: {
            required: true,
            minlength: 10
          },
          postalCode_4: {
            required: true,
            cdnPostal: true
          },
          genderRadios_4: {
            required: true
          },
          news_4: {
            required: false
          },
          terms_4: {
            required: true
          }
      },
      messages: {
        username_4: {
          required: "Enter username",
          minlength: "Minlength of 5 characters"
        },
        email_4: {
          required: "Enter email",
          email: "Invalid email. format: name@domain.com"
        },
        password_4: {
          required: "Enter Password",
          minlength: "Minlength of 5 characters"
        },
        confirmPassword_4: {
          required: "Enter Password",
          minlength: "Minlength of 5 characters",
          equalTo: "Passwords are not the same"
        },
        firstName_4: "Enter first name",
        lastName_4: "Enter last name",
        phoneNumber_4: {
          required: "Enter phone",
          phoneUS: "Invalid phone"
        },
        dob_4: "Pick date",
        address_4: "Enter Postal Address",
        postalCode_4: "Enter Postal Code",
        genderRadios_4: "Pick gender",
        terms_4: "Accept terms"
      },
      errorPlacement: function (error, element) {
          if(element.attr("name") == "dob_4") {
            error.appendTo(element.parent().next("div"));
          } else if (element.attr("name") == "genderRadios_4" ) {
            error.appendTo(".radioE");
          } else if (element.attr("name") == "terms_4"  ){
            error.appendTo(".checkE");
          } else {
            error.appendTo(element.parent().after());
          }
      },
      submitHandler: function (form) { // for demo
          alert('valid form submitted'); // for demo
          return false; // for demo
      }
  });

  jQuery.validator.addMethod("cdnPostal", function(postal, element) {
      return this.optional(element) ||
      postal.match(/[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/);
  }, "Invalid postal code.");

  $('#reset_4').click(function() {
    console.log('click');
    $('#form_4').validate().resetForm();
  });

});

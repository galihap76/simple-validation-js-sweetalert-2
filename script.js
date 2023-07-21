let username = document.getElementById('username');
let password = document.getElementById('password');
let formSubmit = document.getElementsByTagName('form')[0];

formSubmit.addEventListener('submit', function(e) {
  if (username.value === "" && password.value === "") {
    e.preventDefault();
    Swal.fire(
      'Not Valid',
      'Username and password cannot be blank!',
      'error'
    );
  } else if (username.value === "") {
    e.preventDefault();
    Swal.fire(
      'Not Valid',
      'Username cannot be blank!',
      'error'
    );
  } else if (password.value === "") {
    e.preventDefault();
    Swal.fire(
      'Not Valid',
      'Password cannot be blank!',
      'error'
    );
  }
});

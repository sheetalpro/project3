const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (name === '' || email === '' || phone === '' || !gender || hobbies.length === 0 || password === '' || confirmPassword === '') {
    alert('Please fill all fields.');
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

  if (isNaN(phone) || phone.length < 10) {
    alert('Please enter a valid phone number.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  alert('Form submitted successfully!');
  form.reset();
});
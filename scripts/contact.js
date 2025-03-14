import { ShowToast } from "./ShowToast.js"

const message = document.querySelector("#msg")




    document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      // Get form inputs
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      // Validate inputs
      let isValid = true;

      if (!name) {
        document.querySelector('#name + .error-message').style.display = 'block';
        isValid = false;
      } else {
        document.querySelector('#name + .error-message').style.display = 'none';
      }

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.querySelector('#email + .error-message').style.display = 'block';
        isValid = false;
      } else {
        document.querySelector('#email + .error-message').style.display = 'none';
      }

      if (!phone) {
        document.querySelector('#phone + .error-message').style.display = 'block';
        isValid = false;
      } else {
        document.querySelector('#phone + .error-message').style.display = 'none';
      }

      if (!message) {
        document.querySelector('#message + .error-message').style.display = 'block';
        isValid = false;
      } else {
        document.querySelector('#message + .error-message').style.display = 'none';
      }

      // If all inputs are valid, submit the form
      if (isValid) {
        ShowToast("form submitted")
        this.reset(); // Clear the form
      }
    });

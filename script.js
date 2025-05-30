// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".appointment-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission
  
      // Get form input values
      const name = form.querySelector("input[name='name']").value.trim();
      const phone = form.querySelector("input[name='phone']").value.trim();
      const captcha = form.querySelector("input[name='captcha']").value.trim();
  
      // Simple validation
      if (!name || !phone || !captcha) {
        alert("Please fill in all the fields.");
        return;
      }
  
      if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
  
      // On success
      alert(`Thank you, ${name}! Your consultation request has been submitted.`);
      form.reset(); // Clear form
    });
  });
  
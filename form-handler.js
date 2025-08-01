// Contact form handling with Formspree
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const formStatus = document.getElementById("form-status");

  // Set to true for local development, false for production
  const LOCAL_TESTING_MODE = false; // Change to false when deploying

  // Function to show success message
  function showSuccessMessage() {
    // Create success message
    const successMessage = document.createElement("div");
    successMessage.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(0, 255, 255, 0.3);
      border-radius: 20px;
      padding: 30px;
      color: white;
      text-align: center;
      z-index: 10000;
      box-shadow: 0 20px 40px rgba(0, 255, 255, 0.3);
    `;

    successMessage.innerHTML = `
      <h3 style="color: #00ffff; margin-bottom: 15px;">Message Sent!</h3>
      <p>Thank you for reaching out. I'll get back to you soon!</p>
      <button onclick="this.parentElement.remove()" style="
        margin-top: 15px;
        padding: 10px 20px;
        background: transparent;
        border: 1px solid #00ffff;
        color: #00ffff;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
      ">Close</button>
    `;

    document.body.appendChild(successMessage);

    // Auto-remove message after 5 seconds
    setTimeout(() => {
      if (successMessage.parentElement) {
        successMessage.remove();
      }
    }, 5000);
  }

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Show form status message
  function showFormStatus(message, type) {
    formStatus.style.display = "block";
    formStatus.textContent = message;
    formStatus.style.color = type === "error" ? "#ff5555" : "#00ffff";

    setTimeout(() => {
      formStatus.style.display = "none";
    }, 5000);
  }

  // Reset submit button
  function resetSubmitButton() {
    submitBtn.disabled = false;
    submitBtn.querySelector("span").textContent = "Send Message";
  }

  // Handle form submission
  contactForm.addEventListener("submit", function (e) {
    // Rate limiting check
    const lastSubmitTime = localStorage.getItem("lastFormSubmit");
    const now = Date.now();
    if (lastSubmitTime && now - parseInt(lastSubmitTime) < 60000) {
      // 1 minute cooldown
      e.preventDefault(); // Only prevent default if rate limited
      showFormStatus(
        "Please wait a minute before sending another message.",
        "error"
      );
      return;
    }

    // Get form data for validation
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    // Enhanced form validation
    if (!name || !email || !message) {
      e.preventDefault(); // Only prevent default if validation fails
      showFormStatus("Please fill in all fields.", "error");
      return;
    } else if (!isValidEmail(email)) {
      e.preventDefault(); // Only prevent default if validation fails
      showFormStatus("Please enter a valid email address.", "error");
      return;
    }

    // If in local testing mode, simulate form submission
    if (LOCAL_TESTING_MODE) {
      e.preventDefault(); // Prevent actual form submission

      // Show sending state
      submitBtn.disabled = true;
      submitBtn.querySelector("span").textContent = "Sending...";

      // Simulate network delay
      setTimeout(() => {
        // Store submission time for rate limiting
        localStorage.setItem("lastFormSubmit", now.toString());

        // Redirect to thank-you.html after simulated success
        window.location.href = "thank-you.html";
      }, 1500); // Simulate 1.5 second delay

      return;
    }

    // If we get here, form is valid and not rate limited
    // Show sending state
    submitBtn.disabled = true;
    submitBtn.querySelector("span").textContent = "Sending...";

    // Store submission time for rate limiting
    localStorage.setItem("lastFormSubmit", now.toString());

    // Show a brief "sending" message before the form submits
    showFormStatus("Sending your message...", "success");

    // For Formspree, we'll handle the form submission via AJAX
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to thank-you.html after successful submission
          window.location.href = "thank-you.html";
        } else {
          // Show error message
          showFormStatus(
            "Oops! There was a problem submitting your form.",
            "error"
          );
          resetSubmitButton();
        }
      })
      .catch((error) => {
        // Show error message
        showFormStatus(
          "Oops! There was a problem submitting your form.",
          "error"
        );
        resetSubmitButton();
      });
  });
});

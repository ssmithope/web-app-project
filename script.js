// Toggle between light and dark themes and remember preference in localStorage.
function setupThemeToggle() {
  const toggleButton = document.getElementById("themeToggle");
  if (!toggleButton) return;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// Validate the contact form fields and show helpful error messages.
function setupContactFormValidation() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("formSuccess");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;
    successMessage.textContent = "";

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Validate name
    if (!nameInput.value.trim()) {
      nameError.textContent = "Please enter your name.";
      isValid = false;
    }

    // Validate email with simple pattern
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      emailError.textContent = "Please enter your email address.";
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate message
    if (!messageInput.value.trim()) {
      messageError.textContent = "Please enter a message.";
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = "Thank you! Your message has been validated (demo only).";
      form.reset();
    }
  });
}

// Initialize interactive features when the DOM is ready.
document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupContactFormValidation();
});

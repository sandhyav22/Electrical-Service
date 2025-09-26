    function openModal() {
      document.getElementById("otpModal").style.display = "flex";
    }
    function closeModal() {
      document.getElementById("otpModal").style.display = "none";
    }



    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent actual form submission

      const name = document.getElementById("name").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const email = document.getElementById("email").value.trim();
      const services = document.getElementById("services").value;

      const messageBox = document.getElementById("formMessage");

      if (name && mobile && email && services) {
        messageBox.textContent = "✅ Message sent successfully!";
        messageBox.className = "message success";
        messageBox.style.display = "block";
        this.reset(); // clear form
      } else {
        messageBox.textContent = "⚠️ Please fill all required fields.";
        messageBox.className = "message error";
        messageBox.style.display = "block";
      }
    });




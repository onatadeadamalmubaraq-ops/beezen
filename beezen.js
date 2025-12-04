document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");

      menuToggle.addEventListener("click", () => {
        // Toggle visibility
        navLinks.classList.toggle("hidden");
        navLinks.classList.toggle("flex");
      });
    });

    
  
  function goToForm(serviceType) {
    window.location.href = "form.html?service=" + serviceType;
  }

  // Add event listeners using normal functions
  document.getElementById("installBox").addEventListener("click", function() {
    goToForm("Installation");
  });

  document.getElementById("maintainBox").addEventListener("click", function() {
    goToForm("Maintenance");
  });

  document.getElementById("repairBox").addEventListener("click", function() {
    goToForm("Repairs");
  });
  function getServiceType() {
      const params = new URLSearchParams(window.location.search);
      return params.get("service") || "Not selected";
    }

    document.getElementById("serviceField").value = getServiceType();

 function returnHome(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Redirect to home page
    window.location.href = "index.html";
  }

  // Attach to the form submit event
  document.querySelector("form").addEventListener("submit", returnHome);
  function goToQuote() {
    window.location.href = "price.html"; 
}



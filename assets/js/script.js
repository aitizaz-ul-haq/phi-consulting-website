function toggleMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    var overlay = document.getElementById('overlay');
    document.body.classList.toggle('menu-open');
    mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
  }
  
  function closeMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    var overlay = document.getElementById('overlay');
    document.body.classList.remove('menu-open');
    mobileMenu.style.display = 'none';
    overlay.style.display = 'none';
  }


  document.addEventListener('DOMContentLoaded', function() {
    // Get the clickable div by its ID
    var clickableDiv = document.querySelector('.second-tab');

    // Add a click event listener to the div
    clickableDiv.addEventListener('click', function() {
        // Redirect to another page when the div is clicked
        window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/sub_pages/buisness_consulting.html'; 
        // window.location.href = 'http://127.0.0.1:5500/sub_pages/buisness_consulting.html'; 
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the clickable div by its ID
  var clickableDiv = document.querySelector('.third-tab');

  // Add a click event listener to the div
  clickableDiv.addEventListener('click', function() {
      // Redirect to another page when the div is clicked
      window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/sub_pages/customer_experience_consulting.html'; 
      // window.location.href = 'http://127.0.0.1:5500/sub_pages/customer_experience_consulting.html'; 
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the clickable div by its ID
  var clickableDiv = document.querySelector('.fourth-tab');

  // Add a click event listener to the div
  clickableDiv.addEventListener('click', function() {
      // Redirect to another page when the div is clicked
      window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/sub_pages/financial_consulting.html'; 
      // window.location.href = 'http://127.0.0.1:5500/sub_pages/financial_consulting.html'; 
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the clickable div by its ID
  var clickableDiv = document.querySelector('.fifth-tab');

  // Add a click event listener to the div
  clickableDiv.addEventListener('click', function() {
      // Redirect to another page when the div is clicked
      window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/sub_pages/hr_and_recruitment_consulting.html'; 
      // window.location.href = 'http://127.0.0.1:5500/sub_pages/hr_and_recruitment_consulting.html'; 
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the clickable div by its ID
  var clickableDiv = document.querySelector('.sixth-tab');

  // Add a click event listener to the div
  clickableDiv.addEventListener('click', function() {
      // Redirect to another page when the div is clicked
      window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/sub_pages/sales_consulting.html'; 
      // window.location.href = 'http://127.0.0.1:5500/sub_pages/sales_consulting.html'; 
  });
});
  
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
  

document.addEventListener('DOMContentLoaded', function() {
  // Get the clickable div by its ID
  var home = document.querySelector('.consult-button');
  var phiAbout = document.querySelector('.consult-button-phi-about');
  var phiServices = document.querySelector('.consult-button-services-page');
  var phiOurWork = document.querySelector('.consult-button-our-work');
  var phiBlog = document.querySelector('.consult-button-blog');
  var phiCareers = document.querySelector('.consult-button-careers');

  if(document.title === "Phi Consulting") {
    // Add a click event listener to the div
    home.addEventListener('click', function() {
     // Redirect to another page when the div is clicked
     window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/contacts.html'; 
     // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
   });
  }

  if(document.title === "About Us | Phi Consulting") {
 // Add a click event listener to the div
 phiAbout.addEventListener('click', function() {
  // Redirect to another page when the div is clicked
  window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/contacts.html'; 
  // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
});
  }

  if(document.title === "Phi Consulting | Services") {
    // Add a click event listener to the div
    phiServices.addEventListener('click', function() {
     // Redirect to another page when the div is clicked
     window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/contacts.html'; 
     // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
   });
     }

     if(document.title === "Value Creation | Phi Consulting") {
      // Add a click event listener to the div
      phiOurWork.addEventListener('click', function() {
       // Redirect to another page when the div is clicked
       window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/contacts.html'; 
       // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
     });
       }

       if(document.title === "Insights | Phi Consulting") {
        // Add a click event listener to the div
        phiBlog.addEventListener('click', function() {
         // Redirect to another page when the div is clicked
         window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/contacts.html'; 
         // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
       });
         }

         if(document.title === "Careers | Phi Consulting") {
          // Add a click event listener to the div
          phiCareers.addEventListener('click', function() {
           // Redirect to another page when the div is clicked
           window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/contacts.html'; 
           // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
         });
           }

 
});



document.addEventListener('DOMContentLoaded', function() {
  // Get the clickable div by its ID
  var hr = document.querySelector('.consult-button-hr-consul');
  var financial = document.querySelector('.consult-button-fin-consul');
  var experience = document.querySelector('.consult-button-exp');
  var buisness = document.querySelector('.consult-button-bui-consul');
  var sales = document.querySelector('.consult-button-sales');

  if(document.title === "Services | HR & Recruitment Consulting") {
 // Add a click event listener to the div
 hr.addEventListener('click', function() {
  // Redirect to another page when the div is clicked
  window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/sub_pages/contacts.html'; 
  // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
});
  }

  if(document.title === "Services | Sales Consulting") {
    // Add a click event listener to the div
    sales.addEventListener('click', function() {
     // Redirect to another page when the div is clicked
     window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/contacts.html'; 
     // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
   });
     }

     if(document.title === "Services | Buisness Consulting") {
      // Add a click event listener to the div
      buisness.addEventListener('click', function() {
       // Redirect to another page when the div is clicked
       window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/contacts.html'; 
       // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
     });
       }

       if(document.title === "Services | Customer Experience Consulting") {
        // Add a click event listener to the div
        experience.addEventListener('click', function() {
         // Redirect to another page when the div is clicked
         window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/contacts.html'; 
         // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
       });
         }

         if(document.title === "Services | Financial Consulting") {
          // Add a click event listener to the div
          financial.addEventListener('click', function() {
           // Redirect to another page when the div is clicked
           window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/contacts.html'; 
           // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
         });
           }

 
});




document.addEventListener('DOMContentLoaded', function() {
  // Get the clickable div by its ID
  var one = document.querySelector('.sales-tab-one');
  var two = document.querySelector('.sales-tab-two');
  var three = document.querySelector('.sales-tab-three');
  var four = document.querySelector('.sales-tab-four');
  var five = document.querySelector('.sales-tab-five');

  if(document.title === "Phi Consulting | Services") {
 // Add a click event listener to the div
 one.addEventListener('click', function() {
  // Redirect to another page when the div is clicked
  window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/sub_pages/sales_consulting.html'; 
  // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
});
  }

  if(document.title === "Phi Consulting | Services") {
    // Add a click event listener to the div
    two.addEventListener('click', function() {
     // Redirect to another page when the div is clicked
     window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/buisness_consulting.html'; 
     // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
   });
     }

     if(document.title === "Phi Consulting | Services") {
      // Add a click event listener to the div
      three.addEventListener('click', function() {
       // Redirect to another page when the div is clicked
       window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/financial_consulting.html'; 
       // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
     });
       }

       if(document.title === "Phi Consulting | Services") {
        // Add a click event listener to the div
        four.addEventListener('click', function() {
         // Redirect to another page when the div is clicked
         window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/hr_and_recruitment_consulting.html'; 
         // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
       });
         }

         if(document.title === "Phi Consulting | Services") {
          // Add a click event listener to the div
          five.addEventListener('click', function() {
           // Redirect to another page when the div is clicked
           window.location.href = 'https://aitizaz-ul-haq.github.io/phi-consulting-website/main_pages/customer_experience_consulting.html'; 
           // window.location.href = 'http://127.0.0.1:5500/main_pages/contacts.html'; 
         });
           }

 
});





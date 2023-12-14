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
  
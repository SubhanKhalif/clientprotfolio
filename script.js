  // JavaScript for toggling the menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  } else {
    console.error('Menu toggle or mobile menu elements not found.');
  }

  function redirectToPage(url) {
    window.location.href = url; // Redirect to the specified URL
  }

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

          // the visibility tab
document.addEventListener('visibilitychange',
  function () {
      if (document.visibilityState === "visible") {
          document.title = "Portfolio | HARMEET KOUR";
          $("#favicon").attr("href", "assets/logo.png");
      }
      else {
          document.title = "Come Back To Website";
          $("#favicon").attr("href", "assets/images/favhand.png");
      }
  });
      // the visibility tab

      
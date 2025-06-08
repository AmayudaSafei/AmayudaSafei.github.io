const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bx-x');
});

const toggleButton = document.getElementById('theme-toggle');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Ubah ikon
    if (document.body.classList.contains('light-mode')) {
      toggleButton.classList.remove('bx-moon');
      toggleButton.classList.add('bx-sun');
    } else {
      toggleButton.classList.remove('bx-sun');
      toggleButton.classList.add('bx-moon');
    }
  });
  
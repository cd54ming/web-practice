window.onload = function () {
  const menuIcon = document.querySelector('.menu-icon');
  const sidebar = document.querySelector('.sidebar');
  menuIcon.addEventListener('click', () => {
    sidebar.style.width = (window.getComputedStyle(sidebar).width === '0px') ? '250px' : '0px';
  });
};

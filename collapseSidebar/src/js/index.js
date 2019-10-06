window.onload = function() {
  let menuIcon = document.querySelector('.menu-icon');
  let sidebar = document.querySelector('.sidebar');
  menuIcon.addEventListener('click', () => {
    sidebar.style.width = (window.getComputedStyle(sidebar).width === '0px') ? '250px' : '0px';
  });
}

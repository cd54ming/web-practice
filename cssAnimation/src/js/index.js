window.onload = () => {
  const img = document.createElement('img');
  img.setAttribute('src', 'images/mickyMouse.gif');
  const gifArea = document.querySelector('.gif-area');
  gifArea.insertBefore(img, gifArea.firstChild);
  document.querySelector('.sprite').style.animationPlayState = 'running';
};

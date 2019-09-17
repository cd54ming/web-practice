navigator.clipboard.readText().then(clipText => {
  const clipboardContent = document.getElementById('clipboard-content');
  clipboardContent.innerHTML = clipText;
});

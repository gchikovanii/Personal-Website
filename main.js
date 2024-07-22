window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  setTimeout(() => {
      loadingScreen.style.display = 'none';
      mainContent.style.display = 'flex';
  }, 2000);
});

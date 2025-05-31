document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Mevcut tema durumunu kontrol et
  function checkTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
      document.body.classList.add('dark-theme');
      themeToggle.textContent = '☀️ Light Mode';
    } else {
      document.body.classList.remove('dark-theme');
      themeToggle.textContent = '🌙 Dark Mode';
    }
  }

  // Tema değiştirme fonksiyonu
  function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-theme');
      themeToggle.textContent = '🌙 Dark Mode';
    } else {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-theme');
      themeToggle.textContent = '☀️ Light Mode';
    }
  }

  // Buton event listener'ı
  themeToggle.addEventListener('click', toggleTheme);

  // Sistem teması değiştiğinde
  prefersDarkScheme.addListener(checkTheme);

  // İlk yüklemede tema kontrolü
  checkTheme();
});

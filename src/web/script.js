document.addEventListener('DOMContentLoaded', function() {
    const profileCard = document.getElementById('profile-card');
    const themeBtn = document.getElementById('theme-btn');
  
    function toggleTheme() {
      profileCard.classList.toggle('dark-mode');
      if (profileCard.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️ Светлая тема';
      } else {
        themeBtn.textContent = '🌙 Темная тема';
      }
    }
    themeBtn.addEventListener('click', toggleTheme);
  });
  
  var q24 = document.getElementById("q24");
  var q31 = q24.getContext("2d");
  q24.height = window.innerHeight;
  q24.width = window.innerWidth;
  var q55 = "的一是在不了有和人这中大为上个国我以要他时龙飞ᚠᚢᚦᚬᚱᚴᚼᚽᚾᚿᛅᛆᛇᛈᛉᛊᛋᛍᛎᛏᛐᛑᛒᛓᛔᛗᛘᛙᛚᛛᛜᛝᛞᛟ123456789@#$%^&*()*&^%+-/~{[|`]}abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  q55 = q55.split("");
  var font_size = 13;
  var columns = q24.width / font_size;
  var drops = [];
  for (var x = 0; x < columns; x++) drops[x] = 1;
  
  function draw() {
    q31.fillStyle = "rgba(0, 0, 0, 0.04)";
    q31.fillRect(0, 0, q24.width, q24.height);
    q31.fillStyle = "#1686a8";
    q31.font = font_size + "px 'Noto Sans Old Turkic', sans-serif";
    for (var i = 0; i < drops.length; i++) {
      var matrix = q55[Math.floor(Math.random() * q55.length)];
      q31.fillText(matrix, i * font_size, drops[i] * font_size);
      if (drops[i] * font_size > q24.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(draw, 55);
  window.addEventListener('resize', function() {
    q24.height = window.innerHeight;
    q24.width = window.innerWidth;
    columns = q24.width / font_size;
    drops = [];
    for (var x = 0; x < columns; x++) drops[x] = 1;
  });
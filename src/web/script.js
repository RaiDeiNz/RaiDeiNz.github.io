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

      /*
              --GUYS, NEED SOME HELP WITH NEW UNICODES TO WRITE OLD TURKIC RUNES AS MATRIX RAIN. VIKING RUNES ARE WORKING SMOOTHLY; BUT TURKIC ARE NOT!--
      HERE THE RUNES:
      
      var matrixRunes = ['\u{10C00}', '\u{10C01}', '\u{10C02}', '\u{10C03}', '\u{10C04}', '\u{10C05}', '\u{10C06}', '\u{10C07}', '\u{10C08}', '\u{10C09}', '\u{10C0A}', '\u{10C0B}', '\u{10C0C}', '\u{10C0D}', '\u{10C0E}',
      '\u{10C10}', '\u{10C11}', '\u{10C12}', '\u{10C13}', '\u{10C14}', '\u{10C15}', '\u{10C16}', '\u{10C17}', '\u{10C18}', '\u{10C19}', '\u{10C1A}', '\u{10C1B}', '\u{10C1C}', '\u{10C1D}', '\u{10C1E}',
      '\u{10C20}', '\u{10C21}', '\u{10C22}', '\u{10C23}', '\u{10C24}', '\u{10C25}', '\u{10C26}', '\u{10C27}', '\u{10C28}', '\u{10C29}', '\u{10C2A}', '\u{10C2B}', '\u{10C2C}', '\u{10C2D}', '\u{10C2E}',
      '\u{10C30}', '\u{10C31}', '\u{10C32}', '\u{10C33}', '\u{10C34}', '\u{10C35}', '\u{10C36}', '\u{10C37}', '\u{10C38}', '\u{10C39}', '\u{10C3A}', '\u{10C3B}', '\u{10C3C}', '\u{10C3D}', '\u{10C3E}',
      '\u{10C40}', '\u{10C41}', '\u{10C42}', '\u{10C43}', '\u{10C44}', '\u{10C45}', '\u{10C46}', '\u{10C47}', '\u{10C48}'];
      
      */
  
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

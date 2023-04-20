const header = document.createElement('header');
header.className = 'header';
header.innerHTML = `
<div class="container header__container">
  <div class="header__logo">
    <p class="header__logo-text">Virtual <span class="logo-color">Keyboard</span></p>
  </div>
  <div class="header__layout">
    <div class="header__layout-text">
      <p>Keyboard shortcut to</p>
      <p>change language:</p>
    </div>
    <div class="header__layout-shortcut">Shift + Ctrl</div>
    <div class="header__layout-icons">
      <div class="icon" id="icon-eng"></div>
      <div class="icon" id="icon-ru"></div>
    </div>
  </div>
</div>
`;

document.body.prepend(header);

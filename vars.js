export const headerHtml = `
<div class="container header__container">
  <div class="header__logo">
    <h1 class="header__logo-text">Virtual <span class="logo-color">Keyboard</span></h1>
  </div>
  <div class="header__layout">
    <div class="header__layout-text">
      <p>Keyboard shortcut to</p>
      <p>change language:</p>
    </div>
    <div class="header__layout-shortcut">Shift + Ctrl</div>
    <div class="header__layout-icons">
      <div class="icon" id="icon-eng">EN</div>
      <div class="icon" id="icon-ru">RU</div>
    </div>
  </div>
</div>
`;

export const mainHtml = `
<div class="container main__container">
  <div class="textarea__box">
    <textarea class="textarea" name="area" id="area" placeholder="Let's test me." cols="100" rows="10"></textarea>
  </div>
  <div class="keyboard">
    <div class="row">
      <div class="key key-double">\`</div>
      <div class="key key-double">!<br>1</div>
      <div class="key key-double">2</div>
      <div class="key key-double">3</div>
      <div class="key key-double">4</div>
      <div class="key key-double">5</div>
      <div class="key key-double">6</div>
      <div class="key key-double">7</div>
      <div class="key key-double">8</div>
      <div class="key key-double">9</div>
      <div class="key key-double">0</div>
      <div class="key key-double">-</div>
      <div class="key key-double">=</div>
      <div class="key key-backspace">backspace</div>
    </div>
    <div class="row">
      <div class="key key-tab">tab</div>
      <div class="key key-letter">q</div>
      <div class="key key-letter">w</div>
      <div class="key key-letter">e</div>
      <div class="key key-letter">r</div>
      <div class="key key-letter">t</div>
      <div class="key key-letter">y</div>
      <div class="key key-letter">u</div>
      <div class="key key-letter">i</div>
      <div class="key key-letter">o</div>
      <div class="key key-letter">p</div>
      <div class="key key-double">[</div>
      <div class="key key-double">]</div>
      <div class="key key-double">\\</div>
      <div class="key key-delete">delete</div>
    </div>
    <div class="row">
      <div class="key key-caps">caps lock</div>
      <div class="key key-letter">a</div>
      <div class="key key-letter">s</div>
      <div class="key key-letter">d</div>
      <div class="key key-letter">f</div>
      <div class="key key-letter">g</div>
      <div class="key key-letter">h</div>
      <div class="key key-letter">j</div>
      <div class="key key-letter">k</div>
      <div class="key key-letter">l</div>
      <div class="key key-double">;</div>
      <div class="key key-double">'</div>
      <div class="key key-enter">enter</div>
    </div>
    <div class="row">
      <div class="key key-shift">shift</div>
      <div class="key key-letter">z</div>
      <div class="key key-letter">x</div>
      <div class="key key-letter">c</div>
      <div class="key key-letter">v</div>
      <div class="key key-letter">b</div>
      <div class="key key-letter">n</div>
      <div class="key key-letter">m</div>
      <div class="key key-double">,</div>
      <div class="key key-double">.</div>
      <div class="key key-double">/</div>
      <div class="key key-up">⬆</div>
      <div class="key key-shift">shift</div>
    </div>
    <div class="row">
    <div class="key key-ctrl">ctrl</div>
    <div class="key key-win">win</div>
    <div class="key key-alt">alt</div>
    <div class="key key-space"></div>
    <div class="key key-alt">alt</div>
    <div class="key key-left">⬅</div>
    <div class="key key-down">⬇</div>
    <div class="key key-right">➡</div>
    <div class="key key-ctrl">ctrl</div>
  </div>
  </div>
  <div class="notification">This project has been created in Windows OS</div>
</div>
`;

export const mainHtmlRu = `
<div class="container main__container">
  <div class="textarea__box">
    <textarea class="textarea" name="area" id="area" placeholder="Let's test me." cols="100" rows="10"></textarea>
  </div>
  <div class="keyboard">
    <div class="row">
      <div class="key key-letter">ё</div>
      <div class="key key-double">1</div>
      <div class="key key-double">2</div>
      <div class="key key-double">3</div>
      <div class="key key-double">4</div>
      <div class="key key-double">5</div>
      <div class="key key-double">6</div>
      <div class="key key-double">7</div>
      <div class="key key-double">8</div>
      <div class="key key-double">9</div>
      <div class="key key-double">0</div>
      <div class="key key-double">-</div>
      <div class="key key-double">=</div>
      <div class="key key-backspace">backspace</div>
    </div>
    <div class="row">
      <div class="key key-tab">tab</div>
      <div class="key key-letter">й</div>
      <div class="key key-letter">ц</div>
      <div class="key key-letter">у</div>
      <div class="key key-letter">к</div>
      <div class="key key-letter">е</div>
      <div class="key key-letter">н</div>
      <div class="key key-letter">г</div>
      <div class="key key-letter">ш</div>
      <div class="key key-letter">щ</div>
      <div class="key key-letter">з</div>
      <div class="key key-letter">х</div>
      <div class="key key-letter">ъ</div>
      <div class="key key-double">\\</div>
      <div class="key key-delete">delete</div>
    </div>
    <div class="row">
      <div class="key key-caps">caps lock</div>
      <div class="key key-letter">ф</div>
      <div class="key key-letter">ы</div>
      <div class="key key-letter">в</div>
      <div class="key key-letter">а</div>
      <div class="key key-letter">п</div>
      <div class="key key-letter">р</div>
      <div class="key key-letter">о</div>
      <div class="key key-letter">л</div>
      <div class="key key-letter">д</div>
      <div class="key key-letter">ж</div>
      <div class="key key-letter">э</div>
      <div class="key key-enter">enter</div>
    </div>
    <div class="row">
      <div class="key key-shift">shift</div>
      <div class="key key-letter">я</div>
      <div class="key key-letter">ч</div>
      <div class="key key-letter">с</div>
      <div class="key key-letter">м</div>
      <div class="key key-letter">и</div>
      <div class="key key-letter">т</div>
      <div class="key key-letter">ь</div>
      <div class="key key-letter">б</div>
      <div class="key key-letter">ю</div>
      <div class="key key-double">.</div>
      <div class="key key-up">⬆</div>
      <div class="key key-shift">shift</div>
    </div>
    <div class="row">
    <div class="key key-ctrl">ctrl</div>
    <div class="key key-win">win</div>
    <div class="key key-alt">alt</div>
    <div class="key key-space"></div>
    <div class="key key-alt">alt</div>
    <div class="key key-left">⬅</div>
    <div class="key key-down">⬇</div>
    <div class="key key-right">➡</div>
    <div class="key key-ctrl">ctrl</div>
  </div>
  </div>
  <div class="notification">This project has been created in Windows OS</div>
</div>
`;

export const footerHtml = `
<div class="container footer__container">
<div class="footer__inner">
  <a class="footer__link footer__github" href="https://github.com/VitalyRK" target="_blank">
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
      <path
        d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
    </svg>
    <span class="footer__github-span">Visit my GitHub</span>
  </a>
  <p class="footer__copyright">© Vitali Shishov, 2023</p>
  <a class="footer__link" href="https://rs.school/js/" target="_blank">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="73px"
      height="26px" viewBox="0,0,256,91.17188">
      <g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
        font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
        <g transform="translate(0,-0.0031) scale(3.50685,3.50685)">
          <g>
            <path
              d="M1.2,11.9v-11.7h6c1.1,0 2,0.1 2.6,0.3c0.6,0.2 1.1,0.6 1.4,1.1c0.4,0.6 0.6,1.2 0.5,1.9c0,1.2 -0.5,2.2 -1.6,2.8c-0.3,0.2 -0.7,0.4 -1.2,0.4c0.3,0.1 0.7,0.3 1,0.5c0.2,0.2 0.4,0.4 0.6,0.6c0.2,0.2 0.4,0.5 0.5,0.7l1.8,3.4h-4.2l-1.9,-3.6c-0.3,-0.4 -0.5,-0.7 -0.7,-0.9c-0.3,-0.2 -0.6,-0.3 -0.9,-0.3h-0.3v4.7l-3.6,0.1zM4.8,4.9h1.5c0.3,0 0.6,-0.1 1,-0.2c0.2,0 0.4,-0.2 0.6,-0.4c0.4,-0.5 0.3,-1.1 -0.1,-1.5c-0.3,-0.1 -0.8,-0.2 -1.4,-0.2h-1.6zM0.4,21.9l3.4,-0.2c0.1,0.6 0.2,1 0.5,1.3c0.4,0.5 0.9,0.7 1.6,0.7c0.5,0 0.9,-0.1 1.2,-0.4c0.3,-0.2 0.4,-0.5 0.4,-0.8c0,-0.3 -0.1,-0.6 -0.4,-0.8c-0.3,-0.2 -0.9,-0.5 -1.9,-0.7c-1.6,-0.4 -2.7,-0.8 -3.4,-1.4c-0.7,-0.6 -1,-1.4 -1,-2.3c0,-0.6 0.2,-1.2 0.5,-1.7c0.4,-0.6 0.9,-1 1.6,-1.3c0.7,-0.3 1.7,-0.5 2.9,-0.5c1.5,0 2.6,0.3 3.4,0.8c0.8,0.6 1.2,1.4 1.4,2.7l-3.4,0.2c-0.1,-0.5 -0.3,-0.9 -0.6,-1.2c-0.3,-0.2 -0.7,-0.4 -1.2,-0.4c-0.4,0 -0.7,0.1 -0.9,0.3c-0.2,0.2 -0.3,0.4 -0.3,0.7c0,0.2 0.1,0.4 0.3,0.5c0.2,0.2 0.6,0.3 1.2,0.4c1.6,0.3 2.7,0.7 3.4,1c0.7,0.4 1.2,0.8 1.5,1.3c0.3,0.5 0.5,1.1 0.5,1.7c0,0.7 -0.2,1.5 -0.6,2.1c-0.4,0.6 -1,1.1 -1.7,1.4c-0.9,0.5 -1.9,0.7 -3,0.7c-2,0 -3.4,-0.4 -4.1,-1.2c-0.8,-0.7 -1.2,-1.7 -1.3,-2.9z">
            </path>
            <path
              d="M17.7,21l3.2,1c-0.2,0.8 -0.5,1.6 -1,2.2c-0.4,0.6 -1,1 -1.7,1.3c-0.7,0.3 -1.5,0.5 -2.6,0.5c-1.3,0 -2.3,-0.2 -3.1,-0.5c-0.8,-0.4 -1.5,-1 -2.1,-1.9c-0.6,-0.9 -0.9,-2.1 -0.9,-3.6c0,-1.9 0.5,-3.4 1.5,-4.5c1,-1.1 2.5,-1.6 4.4,-1.6c1.5,0 2.6,0.3 3.5,0.9c0.8,0.6 1.5,1.5 1.9,2.7l-3.2,0.7c-0.1,-0.3 -0.2,-0.5 -0.4,-0.8c-0.2,-0.3 -0.4,-0.5 -0.7,-0.6c-0.3,-0.1 -0.6,-0.2 -1,-0.2c-0.8,0 -1.5,0.3 -1.9,1c-0.3,0.5 -0.5,1.3 -0.5,2.3c0,1.3 0.2,2.2 0.6,2.7c0.4,0.5 0.9,0.7 1.7,0.7c0.7,0 1.2,-0.2 1.6,-0.6c0.3,-0.4 0.6,-1 0.7,-1.7zM25.1,14.1h3.6v4.1h3.9v-4.1h3.6v11.7h-3.6v-4.7h-3.9v4.7h-3.6c0,0 0,-11.7 0,-11.7z">
            </path>
            <path
              d="M35.8,19.9c0,-1.9 0.5,-3.4 1.6,-4.5c1.1,-1.1 2.6,-1.6 4.4,-1.6c1.9,0 3.4,0.5 4.5,1.6c1.1,1.1 1.7,2.6 1.7,4.5c0,1.4 -0.2,2.5 -0.7,3.4c-0.4,0.9 -1.1,1.6 -2,2c-0.9,0.5 -2,0.7 -3.3,0.7c-1.3,0 -2.4,-0.2 -3.3,-0.6c-0.9,-0.4 -1.6,-1.1 -2.1,-2c-0.5,-0.9 -0.8,-2.1 -0.8,-3.5zM39.4,20c0,1.2 0.2,2 0.7,2.6c0.4,0.5 1,0.8 1.8,0.8c0.8,0 1.4,-0.2 1.8,-0.8c0.4,-0.5 0.6,-1.4 0.6,-2.7c0,-1.1 -0.2,-1.9 -0.7,-2.4c-0.4,-0.5 -1,-0.8 -1.8,-0.8c-0.7,0 -1.3,0.3 -1.8,0.8c-0.5,0.5 -0.6,1.3 -0.6,2.5z">
            </path>
            <path d="M63.4,14.1h3.6v8.8h5.6v2.9h-9.3l0.1,-11.7z"></path>
            <path
              d="M61.9,3.1c-2.3,-3 -7,-3.2 -10.7,-0.5c-3.7,2.7 -4.7,7.4 -2.4,10.4c2.3,3 7,3.2 10.7,0.5c3.6,-2.8 4.7,-7.5 2.4,-10.4zM59.3,13.2c-1.7,1.3 -3.7,2 -5.7,1.9c-1.9,-0.1 -3.6,-0.9 -4.6,-2.3c-1,-1.4 -1.4,-3.2 -0.9,-5.1c0.5,-1.9 1.7,-3.7 3.4,-4.9c1.7,-1.3 3.7,-2 5.7,-1.9c1.8,0.1 3.5,0.9 4.5,2.3c1,1.4 1.4,3.2 0.9,5.1c-0.4,1.9 -1.6,3.6 -3.3,4.9z">
            </path>
            <g>
              <path
                d="M51.7,7.2l1.3,-1l1.6,2.3c0.3,0.4 0.5,0.8 0.6,1.2c0.1,0.3 0.1,0.7 -0.1,1c-0.2,0.4 -0.4,0.7 -0.8,1c-0.4,0.3 -0.8,0.5 -1.1,0.5c-0.3,0.1 -0.6,0 -0.9,-0.1c-0.3,-0.2 -0.6,-0.4 -0.8,-0.7l1.1,-1c0.1,0.1 0.2,0.3 0.3,0.4c0.1,0.1 0.2,0.1 0.3,0.1c0.1,0 0.2,0 0.2,-0.1c0.1,-0.1 0.2,-0.2 0.2,-0.4c0,-0.2 -0.1,-0.4 -0.3,-0.6l-1.6,-2.6zM55.6,8.6l1.2,-0.9c0.1,0.2 0.3,0.3 0.5,0.3c0.3,0.1 0.5,0 0.8,-0.1c0.2,-0.1 0.3,-0.2 0.3,-0.4c0.1,-0.2 -0.1,-0.5 -0.3,-0.6h-0.1c-0.2,0 -0.4,0.1 -0.8,0.2c-0.7,0.3 -1.2,0.4 -1.6,0.3c-0.4,0 -0.7,-0.2 -0.9,-0.6c-0.2,-0.2 -0.2,-0.5 -0.2,-0.7c0,-0.3 0.1,-0.6 0.2,-0.9c0.2,-0.4 0.5,-0.7 0.9,-0.9c0.5,-0.4 1,-0.6 1.5,-0.6c0.4,0 0.8,0.2 1.2,0.6l-1.3,1c-0.2,-0.3 -0.7,-0.4 -1,-0.1v0c-0.1,0.1 -0.2,0.2 -0.3,0.3c0,0.1 0,0.2 0.1,0.3c0,0.1 0.1,0.2 0.1,0.2c0.1,0 0.3,0 0.5,-0.2c0.7,-0.3 1.2,-0.4 1.5,-0.5c0.3,-0.1 0.6,0 0.9,0.1c0.2,0.1 0.5,0.3 0.6,0.5c0.2,0.3 0.3,0.6 0.3,0.9c0,0.3 -0.1,0.7 -0.3,1c-0.2,0.4 -0.5,0.7 -0.9,0.9c-0.7,0.5 -1.3,0.7 -1.8,0.6c-0.4,-0.1 -0.8,-0.3 -1.1,-0.7z">
              </path>
            </g>
            <path
              d="M48.1,7.8c0,-0.2 0.1,-0.4 0.1,-0.5c-0.1,-0.3 -0.2,-0.6 -0.4,-0.9c-0.3,-0.5 -0.8,-0.9 -1.5,-1.3c-0.7,-0.4 -1.8,-0.7 -3.4,-1c-0.6,-0.1 -1,-0.3 -1.2,-0.4c-0.2,-0.1 -0.3,-0.3 -0.3,-0.5c0,-0.3 0.1,-0.5 0.3,-0.7c0.2,-0.2 0.5,-0.3 0.9,-0.3c0.5,0 0.9,0.1 1.2,0.4c0.3,0.2 0.5,0.6 0.6,1.2l3.4,-0.2c-0.1,-1.2 -0.6,-2.1 -1.4,-2.7c-0.7,-0.6 -1.8,-0.9 -3.3,-0.9c-1.2,0 -2.2,0.2 -2.9,0.5c-0.6,0.2 -1.2,0.7 -1.6,1.3c-0.3,0.5 -0.5,1.1 -0.5,1.7c0,0.9 0.4,1.7 1,2.3c0.7,0.6 1.8,1.1 3.4,1.4c1,0.2 1.6,0.4 1.8,0.7c0.2,0.2 0.4,0.5 0.4,0.8c0,0.3 -0.2,0.6 -0.4,0.8c-0.3,0.2 -0.7,0.4 -1.2,0.4c-0.7,0 -1.2,-0.2 -1.6,-0.7c-0.2,-0.3 -0.4,-0.7 -0.5,-1.3l-3.3,0.1c0.1,1.2 0.5,2.1 1.3,2.9c0.8,0.8 2.1,1.2 4.1,1.2c1.1,0 2.1,-0.2 2.8,-0.5c0.7,-0.3 1.3,-0.8 1.7,-1.4c0.1,-0.1 0.1,-0.2 0.2,-0.3c0,-0.7 0.1,-1.4 0.3,-2.1z">
            </path>
            <path
              d="M62.2,15.5c-1,-1 -2.3,-1.5 -4,-1.6c-1.4,0.8 -3,1.2 -4.5,1.2c-0.2,0.1 -0.3,0.3 -0.5,0.4c-1.1,1.1 -1.6,2.6 -1.6,4.5c0,1.4 0.3,2.5 0.8,3.4c0.5,0.9 1.2,1.5 2.1,2c0.9,0.4 1.9,0.6 3.3,0.6c1.3,0 2.4,-0.2 3.3,-0.7c0.9,-0.5 1.5,-1.2 2,-2c0.5,-0.9 0.7,-2 0.7,-3.4c0,-1.9 -0.6,-3.4 -1.6,-4.4zM59.5,22.5c-0.4,0.5 -1,0.8 -1.8,0.8c-0.8,0 -1.4,-0.3 -1.8,-0.8c-0.4,-0.5 -0.7,-1.4 -0.7,-2.6c0,-1.2 0.2,-2 0.7,-2.6c0.4,-0.5 1.1,-0.8 1.8,-0.8c0.8,0 1.4,0.2 1.8,0.8c0.4,0.5 0.7,1.3 0.7,2.4c0,1.4 -0.3,2.3 -0.7,2.8z">
            </path>
          </g>
        </g>
      </g>
    </svg>
  </a>
</div>
</div>
`;

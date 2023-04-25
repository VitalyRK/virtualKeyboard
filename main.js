import { headerHtml, footerHtml, mainHtml, mainContainLetterEng, mainContainLetterRu } from './vars.js';

if (!localStorage.getItem('currentLanguage')) localStorage.setItem('currentLanguage', 'eng');

const header = document.createElement('header');
header.className = 'header';
header.innerHTML = headerHtml;
document.body.prepend(header);

const main = document.createElement('main');
main.className = 'main';
main.innerHTML = mainHtml;
document.body.append(main);

let flagShortcut = true;

const btnEng = document.getElementById('icon-eng');
const btnRu = document.getElementById('icon-ru');

const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = footerHtml;
document.body.append(footer);

const keyboardChange = document.querySelectorAll('.key-letter');

const fillMain = () => {
    if (localStorage.getItem('currentLanguage') == 'eng') {
        for (let i = 0; i < keyboardChange.length; i++) {
            keyboardChange[i].innerHTML = mainContainLetterEng[i];
            if (keyboardChange[i].classList.contains('letter-rus')) keyboardChange[i].classList.add('key-double');
        }
    } else {
        for (let i = 0; i < keyboardChange.length; i++) {
            keyboardChange[i].innerHTML = mainContainLetterRu[i];
            if (keyboardChange[i].classList.contains('letter-rus')) keyboardChange[i].classList.remove('key-double');
        }
    }
};

fillMain();

btnEng.addEventListener('click', () => {
    localStorage.setItem('currentLanguage', 'eng');
    fillMain();
  });
  
btnRu.addEventListener('click', () => {
    localStorage.setItem('currentLanguage', 'ru');
    fillMain();
  });

  const caps = document.querySelector('.key-caps');
  const leftShift = document.getElementById('left_shift');
  const rightShift = document.getElementById('right_shift');
  const isMouseDown = false;
  
  let flagCaps = false;
  const listenerCaps = () => {
    caps.classList.toggle('green-active');
    for (let i = 0; i < keyboardChange.length; i++) {
      keyboardChange[i].classList.toggle('upperLetter');
    }
    flagCaps = flagCaps == false ? true : false;
  }

  caps.addEventListener('click', () => {
    listenerCaps();
  });

  document.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('key')) isMouseDown = true;
    if (event.target.classList.contains('key-shift')) {
      for (let i = 0; i < keyboardChange.length; i++) {
        keyboardChange[i].classList.add('upperLetter');
        if (keyboardChange[i].classList.contains('key-double')) keyboardChange[i].classList.add('key-double-active');
      }
    }
  });
  document.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('key')) isMouseDown = true;
    if (event.target.classList.contains('key-shift')) {
      if (flagCaps == false) {
        for (let i = 0; i < keyboardChange.length; i++) {
            keyboardChange[i].classList.remove('upperLetter');
            if (keyboardChange[i].classList.contains('key-double-active')) keyboardChange[i].classList.remove('key-double-active');
          }
        } else {
          for (let i = 0; i < keyboardChange.length; i++) {
            if (keyboardChange[i].classList.contains('key-double-active')) keyboardChange[i].classList.remove('key-double-active');
          }
        }
    }
  });
  document.addEventListener('focus', (event) => {
     if (isMouseDown) {
       event.blur();
    }
   })

  window.addEventListener('keydown', (e) => {
    if (e.key == "Shift") {
        for (let i = 0; i < keyboardChange.length; i++) {
            keyboardChange[i].classList.add('upperLetter');
            if (keyboardChange[i].classList.contains('key-double')) keyboardChange[i].classList.add('key-double-active');
          }
    };

    // if (e.ctrlKey && e.shiftKey && flagShortcut) {
    //   if (localStorage.getItem('currentLanguage') == 'eng') {
    //     if (letter[0].classList.contains('upperLetter')) {
    //       main.innerHTML = mainHtmlRu;
    //       letter = document.querySelectorAll('.key-letter');
    //       for (let i = 0; i < letter.length; i++) {
    //         letter[i].classList.toggle('upperLetter');
    //       }
    //     } else main.innerHTML = mainHtmlRu;
    //     localStorage.setItem('currentLanguage', 'ru');
    //     caps = document.querySelector('.key-caps');
    //     letter = document.querySelectorAll('.key-letter');
    //     flagShortcut = false;
    //   } else {
    //     if (letter[0].classList.contains('upperLetter')) {
    //       main.innerHTML = mainHtml;
    //       letter = document.querySelectorAll('.key-letter');
    //       for (let i = 0; i < letter.length; i++) {
    //         letter[i].classList.toggle('upperLetter');
    //       }
    //     } else main.innerHTML = mainHtml;
    //     localStorage.setItem('currentLanguage', 'eng');
    //     caps = document.querySelector('.key-caps');
    //     letter = document.querySelectorAll('.key-letter');
    //     flagShortcut = false;
    //   }
    // }
  });

  window.addEventListener('keyup', (e) => {
    if (e.key == "CapsLock") {
      listenerCaps();
    }
    if (e.key == "Shift") {
      if (flagCaps == false) {
        for (let i = 0; i < keyboardChange.length; i++) {
            keyboardChange[i].classList.remove('upperLetter');
            if (keyboardChange[i].classList.contains('key-double-active')) keyboardChange[i].classList.remove('key-double-active');
          }
        } else {
          for (let i = 0; i < keyboardChange.length; i++) {
            if (keyboardChange[i].classList.contains('key-double-active')) keyboardChange[i].classList.remove('key-double-active');
          }
        }
    };
    if (e.ctrlKey && e.shiftKey) {
      flagShortcut = true;
    }
  });
  // console.log(typeof keyboardChange[0].querySelectorAll('span')[1].innerHTML)
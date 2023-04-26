import { headerHtml, footerHtml, mainHtml, mainContainLetterEng, mainContainLetterRu } from './vars.js';

if (!localStorage.getItem('currentLanguage')) localStorage.setItem('currentLanguage', 'eng');

const fillPage = (node, htmlContent, name) => {
  node.className = name;
  node.innerHTML = htmlContent;
  document.body.append(node);
};
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

fillPage(header, headerHtml, 'header');
fillPage(main, mainHtml, 'main');
fillPage(footer, footerHtml, 'footer');

const keyboardChange = document.querySelectorAll('.key-letter');
const btnEng = document.getElementById('icon-eng');
const btnRu = document.getElementById('icon-ru');
const textBlock = document.querySelector('textarea');

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
    if (event.target.classList.contains('key-shift')) {
      for (let i = 0; i < keyboardChange.length; i++) {
        keyboardChange[i].classList.add('upperLetter');
        if (keyboardChange[i].classList.contains('key-double')) keyboardChange[i].classList.add('key-double-active');
      }
    }
  });
  document.addEventListener('mouseup', (event) => {
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

  const keys = document.querySelectorAll('.key');
  let flagShort = false;

  window.addEventListener('keydown', (e) => {
    textBlock.focus(); // TODO maybe this is wrong
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].dataset.key == e.code) {
        keys[i].classList.add('key-active');
      };
    }
    if (e.key == "Shift") {
        for (let i = 0; i < keyboardChange.length; i++) {
            keyboardChange[i].classList.add('upperLetter');
            if (keyboardChange[i].classList.contains('key-double')) keyboardChange[i].classList.add('key-double-active');
          }
    };
    if (e.code == 'ControlLeft') flagShort = true;
    if (e.code == 'AltLeft' && flagShort) {
      flagShort =false;
      localStorage.getItem('currentLanguage') == 'eng' ? localStorage.setItem('currentLanguage', 'ru') : localStorage.setItem('currentLanguage', 'eng');
      fillMain();
    } 
  });

  window.addEventListener('keyup', (e) => {
    if (e.key == "CapsLock") {
      listenerCaps();
    }
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].dataset.key == e.code) {
        keys[i].classList.remove('key-active');
      };
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
  });
  // console.log(typeof keyboardChange[0].querySelectorAll('span')[1].innerHTML)
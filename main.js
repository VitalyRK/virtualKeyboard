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

  window.addEventListener('keydown', (e) => {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].dataset.key == e.code) {
        // console.log('Ko')
        keys[i].classList.add('key-active');
      };
    }
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
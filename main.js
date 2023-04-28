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

  window.addEventListener('keydown', (e) => {
    for (let i = 0; i < keyboardChange.length; i++) {
      if (keyboardChange[i].dataset.key == e.code) {
        e.preventDefault();
        if (keyboardChange[i].classList.contains('letter-rus') && !keyboardChange[i].classList.contains('key-double')) {
          let insert = keyboardChange[i].classList.contains('upperLetter') ? keyboardChange[i].textContent.toUpperCase() : keyboardChange[i].textContent;
          inserLetter(insert);
        } else if (keyboardChange[i].classList.contains('key-double')) {
          let insert = keyboardChange[i].classList.contains('key-double-active') ? keyboardChange[i].querySelectorAll('span')[0].textContent : keyboardChange[i].querySelectorAll('span')[1].textContent;
          inserLetter(insert);
        } else {
          let insert = keyboardChange[i].classList.contains('upperLetter') ? keyboardChange[i].textContent.toUpperCase() : keyboardChange[i].textContent;
          inserLetter(insert);
        }
      }
    }
    textBlock.focus();
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].dataset.key == e.code) {
        keys[i].classList.add('key-active');
      };
    }
    if (e.key == "Tab") {
      e.preventDefault();
      inserLetter(' ');
      inserLetter(' ');
      inserLetter(' ');
      inserLetter(' ');
    }
    if (e.key == "Shift") {
        for (let i = 0; i < keyboardChange.length; i++) {
            keyboardChange[i].classList.add('upperLetter');
            if (keyboardChange[i].classList.contains('key-double')) keyboardChange[i].classList.add('key-double-active');
          }
    };
    if (e.altKey) {
      e.preventDefault();
    }
    if (e.ctrlKey && e.altKey) {
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

  const inserLetter = (insert) => {
    let temp = textBlock.selectionStart;
    textBlock.value = textBlock.value.slice(0, temp) + insert + textBlock.value.slice(textBlock.selectionEnd, textBlock.value.length);
    textBlock.selectionStart = temp + 1;
    textBlock.selectionEnd = textBlock.selectionStart;
  };

  keyboardChange.forEach(key => {
    key.onclick = function() {
      if (key.classList.contains('letter-rus') && !key.classList.contains('key-double')) {
        let insert = key.classList.contains('upperLetter') ? key.textContent.toUpperCase() : key.textContent;
        inserLetter(insert);
      } else if (key.classList.contains('key-double')) {
        let insert = key.classList.contains('key-double-active') ? key.querySelectorAll('span')[0].textContent : key.querySelectorAll('span')[1].textContent;
        inserLetter(insert);
      } else {
        let insert = key.classList.contains('upperLetter') ? key.textContent.toUpperCase() : key.textContent;
        inserLetter(insert);
      }
    }
  });

  const backspace = document.querySelector('.key-backspace');
  backspace.addEventListener('click', () => {
    // console.log(keyboardChange[1].querySelectorAll('span')[1].textContent);
    if (textBlock.selectionStart == 0) return;
    let temp = textBlock.selectionStart - 1;
    textBlock.value = textBlock.value.slice(0, temp) + textBlock.value.slice(textBlock.selectionEnd, textBlock.value.length);
    textBlock.selectionStart = temp;
    textBlock.selectionEnd = textBlock.selectionStart;
  });

  const deleteKey = document.querySelector('.key-delete');
  deleteKey.addEventListener('click', () => {
    if (textBlock.selectionStart == textBlock.value.length) return;
    let temp = textBlock.selectionStart;
    textBlock.value = textBlock.value.slice(0, temp) + textBlock.value.slice(temp + 1, textBlock.value.length);
    textBlock.selectionStart = temp;
    textBlock.selectionEnd = textBlock.selectionStart;
  });

  const enter = document.querySelector('.key-enter');
  enter.addEventListener('click', () => {
    inserLetter('\n');
  });

  const tab = document.querySelector('.key-tab');
  tab.addEventListener('click', () => {
    inserLetter(' ');
    inserLetter(' ');
    inserLetter(' ');
    inserLetter(' ');
  });

  const space = document.querySelector('.key-space');
  space.addEventListener('click', () => {
    inserLetter(' ');
  });

  const arrowUp = document.querySelector('.key-up');
  arrowUp.addEventListener('click', () => {
    inserLetter('⬆');

  });

  const arrowLeft = document.querySelector('.key-left');
  arrowLeft.addEventListener('click', () => {
    textBlock.selectionStart = textBlock.selectionStart == 0 ? 0 : textBlock.selectionStart - 1;
    textBlock.selectionEnd = textBlock.selectionStart;
  });

  const arrowDown = document.querySelector('.key-down');
  arrowDown.addEventListener('click', () => {
    console.log(textBlock.selectionStart);
    if (textBlock.value.split('\n').length > 1) {
    let array = textBlock.value.split('\n');
    let temp = array[0].length;
    let i = 1;
    while (textBlock.selectionStart < temp && i < array.length) {
      temp += array[i].length;
      i++;
      textBlock.selectionStart = temp + 1;
      console.log(textBlock.selectionStart);
    }
    console.log(temp)
  }
    // if (textBlock.value.split('\n').length > 1) textBlock.selectionStart += textBlock.value.split('\n')[0].length ;
  });

  const arrowRight = document.querySelector('.key-right');
  arrowRight.addEventListener('click', () => {
    textBlock.selectionStart += 1;
    textBlock.selectionEnd = textBlock.selectionStart;
  });

  window.addEventListener('mouseup', () => {
    textBlock.focus();
  })
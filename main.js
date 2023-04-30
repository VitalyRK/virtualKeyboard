import {
  headerHtml,
  footerHtml,
  mainHtml,
  mainContainLetterEng,
  mainContainLetterRu,
} from './vars.js';

if (!localStorage.getItem('currentLanguage')) localStorage.setItem('currentLanguage', 'eng');

const fillPage = (nodeName, htmlContent, nameClass) => {
  const item = document.createElement(nodeName);
  item.className = nameClass;
  item.innerHTML = htmlContent;
  document.body.append(item);
};

fillPage('header', headerHtml, 'header');
fillPage('main', mainHtml, 'main');
fillPage('footer', footerHtml, 'footer');

const keyboardChange = document.querySelectorAll('.key-letter');
const btnEng = document.getElementById('icon-eng');
const btnRu = document.getElementById('icon-ru');
const area = document.querySelector('textarea');

const fillMain = () => {
  if (localStorage.getItem('currentLanguage') === 'eng') {
    for (let i = 0; i < keyboardChange.length; i += 1) {
      keyboardChange[i].innerHTML = mainContainLetterEng[i];
      if (keyboardChange[i].classList.contains('letter-rus')) keyboardChange[i].classList.add('key-double');
    }
  } else {
    for (let i = 0; i < keyboardChange.length; i += 1) {
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

const inserLetter = (insert) => {
  const temp = area.selectionStart;
  const endCursor = area.selectionEnd;
  area.value = area.value.slice(0, temp) + insert + area.value.slice(endCursor, area.value.length);
  area.selectionStart = temp + 1;
  area.selectionEnd = area.selectionStart;
};

const caps = document.querySelector('.key-caps');
let flagCaps = false;
const listenerCaps = () => {
  caps.classList.toggle('green-active');
  for (let i = 0; i < keyboardChange.length; i += 1) {
    keyboardChange[i].classList.toggle('upperLetter');
  }
  flagCaps = flagCaps === false;
};

caps.addEventListener('click', () => {
  listenerCaps();
});

document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('key-shift')) {
    for (let i = 0; i < keyboardChange.length; i += 1) {
      keyboardChange[i].classList.add('upperLetter');
      if (keyboardChange[i].classList.contains('key-double')) keyboardChange[i].classList.add('key-double-active');
    }
  }
});
document.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('key-shift')) {
    if (flagCaps === false) {
      for (let i = 0; i < keyboardChange.length; i += 1) {
        keyboardChange[i].classList.remove('upperLetter');
        if (keyboardChange[i].classList.contains('key-double-active')) keyboardChange[i].classList.remove('key-double-active');
      }
    } else {
      for (let i = 0; i < keyboardChange.length; i += 1) {
        if (keyboardChange[i].classList.contains('key-double-active')) keyboardChange[i].classList.remove('key-double-active');
      }
    }
  }
});

const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keyboardChange.length; i += 1) {
    if (keyboardChange[i].dataset.key === e.code) {
      e.preventDefault();
      if (keyboardChange[i].classList.contains('letter-rus') && !keyboardChange[i].classList.contains('key-double')) {
        const insert = keyboardChange[i].classList.contains('upperLetter') ? keyboardChange[i].textContent.toUpperCase() : keyboardChange[i].textContent;
        inserLetter(insert);
      } else if (keyboardChange[i].classList.contains('key-double')) {
        const insert = keyboardChange[i].classList.contains('key-double-active') ? keyboardChange[i].querySelectorAll('span')[0].textContent : keyboardChange[i].querySelectorAll('span')[1].textContent;
        inserLetter(insert);
      } else {
        const insert = keyboardChange[i].classList.contains('upperLetter') ? keyboardChange[i].textContent.toUpperCase() : keyboardChange[i].textContent;
        inserLetter(insert);
      }
    }
  }
  area.focus();
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].dataset.key === e.code) {
      keys[i].classList.add('key-active');
    }
  }
  if (e.key === 'Tab') {
    e.preventDefault();
    inserLetter(' ');
    inserLetter(' ');
    inserLetter(' ');
    inserLetter(' ');
  }
  if (e.key === 'Shift') {
    for (let i = 0; i < keyboardChange.length; i += 1) {
      keyboardChange[i].classList.add('upperLetter');
      if (keyboardChange[i].classList.contains('key-double')) keyboardChange[i].classList.add('key-double-active');
    }
  }
  if (e.altKey) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.altKey) {
    if (localStorage.getItem('currentLanguage') === 'eng') localStorage.setItem('currentLanguage', 'ru');
    else localStorage.setItem('currentLanguage', 'eng');
    fillMain();
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'CapsLock') {
    listenerCaps();
  }
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].dataset.key === e.code) {
      keys[i].classList.remove('key-active');
    }
  }
  if (e.key === 'Shift') {
    if (flagCaps === false) {
      for (let i = 0; i < keyboardChange.length; i += 1) {
        keyboardChange[i].classList.remove('upperLetter');
        if (keyboardChange[i].classList.contains('key-double-active')) keyboardChange[i].classList.remove('key-double-active');
      }
    } else {
      for (let i = 0; i < keyboardChange.length; i += 1) {
        if (keyboardChange[i].classList.contains('key-double-active')) keyboardChange[i].classList.remove('key-double-active');
      }
    }
  }
});

keyboardChange.forEach((elem) => {
  const key = elem;
  key.onclick = () => {
    if (key.classList.contains('letter-rus') && !key.classList.contains('key-double')) {
      const insert = key.classList.contains('upperLetter') ? key.textContent.toUpperCase() : key.textContent;
      inserLetter(insert);
    } else if (key.classList.contains('key-double')) {
      const insert = key.classList.contains('key-double-active') ? key.querySelectorAll('span')[0].textContent : key.querySelectorAll('span')[1].textContent;
      inserLetter(insert);
    } else {
      const insert = key.classList.contains('upperLetter') ? key.textContent.toUpperCase() : key.textContent;
      inserLetter(insert);
    }
  };
});

const backspace = document.querySelector('.key-backspace');
backspace.addEventListener('click', () => {
  if (area.selectionStart === 0) return;
  const temp = area.selectionStart - 1;
  area.value = area.value.slice(0, temp) + area.value.slice(area.selectionEnd, area.value.length);
  area.selectionStart = temp;
  area.selectionEnd = area.selectionStart;
});

const deleteKey = document.querySelector('.key-delete');
deleteKey.addEventListener('click', () => {
  if (area.selectionStart === area.value.length) return;
  const temp = area.selectionStart;
  area.value = area.value.slice(0, temp) + area.value.slice(temp + 1, area.value.length);
  area.selectionStart = temp;
  area.selectionEnd = area.selectionStart;
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
  if (area.value.split('\n').length > 1) {
    const array = area.value.split('\n');
    let limiter = 0;
    for (let i = 0; i < array.length; i += 1) {
      const temp = limiter;
      limiter += array[i].length !== 0 ? array[i].length + 1 : 1;
      if (area.selectionStart < limiter) {
        if (i === 0) break;
        area.selectionStart -= array[i - 1].length + 1;
        if (area.selectionStart >= temp) area.selectionStart = temp - 1;
        area.selectionEnd = area.selectionStart;
        break;
      }
    }
  }
});

const arrowLeft = document.querySelector('.key-left');
arrowLeft.addEventListener('click', () => {
  area.selectionStart = area.selectionStart === 0 ? 0 : area.selectionStart - 1;
  area.selectionEnd = area.selectionStart;
});

const arrowDown = document.querySelector('.key-down');
arrowDown.addEventListener('click', () => {
  if (area.value.split('\n').length > 1) {
    const array = area.value.split('\n');
    let limiter = 0;
    for (let i = 0; i < array.length; i += 1) {
      limiter += array[i].length !== 0 ? array[i].length + 1 : 1;
      if (area.selectionStart < limiter) {
        if (i + 1 < array.length) {
          if (array[i + 1].length === 0) {
            area.selectionStart = limiter;
            break;
          } else {
            area.selectionStart += array[i].length + 1;
            if (area.selectionStart > (array[i + 1].length + limiter)) {
              area.selectionStart = array[i + 1].length + limiter;
            } else if (area.selectionStart < limiter) {
              area.selectionStart = limiter;
            }
            area.selectionEnd = area.selectionStart;
            break;
          }
        } else break;
      }
    }
  }
});

const arrowRight = document.querySelector('.key-right');
arrowRight.addEventListener('click', () => {
  area.selectionStart += 1;
  area.selectionEnd = area.selectionStart;
});

window.addEventListener('mouseup', () => {
  area.focus();
});

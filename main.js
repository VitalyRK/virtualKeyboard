import {
  PageContent,
  basicHtml,
  mainContainLetterEng,
  mainContainLetterRu,
} from './vars.js';

const pageContent = new PageContent();

pageContent.fillPage(basicHtml);
pageContent.fillKeyboard(mainContainLetterEng, mainContainLetterRu);

const btnEng = document.getElementById('icon-eng');
const btnRu = document.getElementById('icon-ru');
const area = document.querySelector('textarea');
const keyboardChange = document.querySelectorAll('.key-letter');

btnEng.addEventListener('click', () => {
  pageContent.setLang('eng');
  pageContent.fillKeyboard(mainContainLetterEng, mainContainLetterRu);
});

btnRu.addEventListener('click', () => {
  pageContent.setLang('ru');
  pageContent.fillKeyboard(mainContainLetterEng, mainContainLetterRu);
});

const insertLetter = (insert) => {
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
        insertLetter(insert);
      } else if (keyboardChange[i].classList.contains('key-double')) {
        const insert = keyboardChange[i].classList.contains('key-double-active') ? keyboardChange[i].querySelectorAll('span')[0].textContent : keyboardChange[i].querySelectorAll('span')[1].textContent;
        insertLetter(insert);
      } else {
        const insert = keyboardChange[i].classList.contains('upperLetter') ? keyboardChange[i].textContent.toUpperCase() : keyboardChange[i].textContent;
        insertLetter(insert);
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
    insertLetter(' ');
    insertLetter(' ');
    insertLetter(' ');
    insertLetter(' ');
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
    if (pageContent.getLang() === 'eng') pageContent.setLang('ru');
    else pageContent.setLang('eng');
    pageContent.fillKeyboard(mainContainLetterEng, mainContainLetterRu);
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
      insertLetter(insert);
    } else if (key.classList.contains('key-double')) {
      const insert = key.classList.contains('key-double-active') ? key.querySelectorAll('span')[0].textContent : key.querySelectorAll('span')[1].textContent;
      insertLetter(insert);
    } else {
      const insert = key.classList.contains('upperLetter') ? key.textContent.toUpperCase() : key.textContent;
      insertLetter(insert);
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
  insertLetter('\n');
});

const tab = document.querySelector('.key-tab');
tab.addEventListener('click', () => {
  insertLetter(' ');
  insertLetter(' ');
  insertLetter(' ');
  insertLetter(' ');
});

const space = document.querySelector('.key-space');
space.addEventListener('click', () => {
  insertLetter(' ');
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

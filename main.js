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
const iBox = document.querySelector('textarea');

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
  const temp = iBox.selectionStart;
  const endCursor = iBox.selectionEnd;
  iBox.value = iBox.value.slice(0, temp) + insert + iBox.value.slice(endCursor, iBox.value.length);
  iBox.selectionStart = temp + 1;
  iBox.selectionEnd = iBox.selectionStart;
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
  iBox.focus();
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
  if (iBox.selectionStart === 0) return;
  const temp = iBox.selectionStart - 1;
  iBox.value = iBox.value.slice(0, temp) + iBox.value.slice(iBox.selectionEnd, iBox.value.length);
  iBox.selectionStart = temp;
  iBox.selectionEnd = iBox.selectionStart;
});

const deleteKey = document.querySelector('.key-delete');
deleteKey.addEventListener('click', () => {
  if (iBox.selectionStart === iBox.value.length) return;
  const temp = iBox.selectionStart;
  iBox.value = iBox.value.slice(0, temp) + iBox.value.slice(temp + 1, iBox.value.length);
  iBox.selectionStart = temp;
  iBox.selectionEnd = iBox.selectionStart;
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
  iBox.selectionStart = iBox.selectionStart === 0 ? 0 : iBox.selectionStart - 1;
  iBox.selectionEnd = iBox.selectionStart;
});

// const arrowDown = document.querySelector('.key-down');
// arrowDown.addEventListener('click', () => {
//   console.log(iBox.selectionStart);
//   if (iBox.value.split('\n').length > 1) {
//     let array = iBox.value.split('\n');
//     let temp = array[0].length;
//     let i = 1;
//     while (iBox.selectionStart < temp && i < array.length) {
//       temp += array[i].length;
//       i++;
//       iBox.selectionStart = temp + 1;
//       console.log(iBox.selectionStart);
//     }
//     console.log(temp)
//   }
// });

const arrowRight = document.querySelector('.key-right');
arrowRight.addEventListener('click', () => {
  iBox.selectionStart += 1;
  iBox.selectionEnd = iBox.selectionStart;
});

window.addEventListener('mouseup', () => {
  iBox.focus();
});

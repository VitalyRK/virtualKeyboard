import { headerHtml, footerHtml, mainHtml, mainHtmlRu } from './vars.js';

if (!localStorage.getItem('currentLanguage')) localStorage.setItem('currentLanguage', 'eng');

const header = document.createElement('header');
header.className = 'header';
header.innerHTML = headerHtml;
document.body.prepend(header);

const btnEng = document.getElementById('icon-eng');
const btnRu = document.getElementById('icon-ru');

const main = document.createElement('main');
let flagShortcut = true;
main.className = 'main';
(localStorage.getItem('currentLanguage') == 'eng') ? main.innerHTML = mainHtml : main.innerHTML = mainHtmlRu;
document.body.append(main);

btnEng.addEventListener('click', () => {
  main.innerHTML = mainHtml;
  localStorage.setItem('currentLanguage', 'eng');
  caps = document.querySelector('.key-caps');
  letter = document.querySelectorAll('.key-letter');
});

btnRu.addEventListener('click', () => {
  main.innerHTML = mainHtmlRu;
  localStorage.setItem('currentLanguage', 'ru');
  caps = document.querySelector('.key-caps');
  letter = document.querySelectorAll('.key-letter');
});

const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = footerHtml;
document.body.append(footer);


const keys = document.querySelectorAll('.key');
let caps = document.querySelector('.key-caps');
let letter = document.querySelectorAll('.key-letter');
window.addEventListener('keydown', (e) => {
  console.log(e.key);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].innerHTML == e.key) keys[i].focus();
    
  }
  // e.active();
 });

window.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && flagShortcut) {
    if (localStorage.getItem('currentLanguage') == 'eng') {
      if (letter[0].classList.contains('upperLetter')) {
        main.innerHTML = mainHtmlRu;
        letter = document.querySelectorAll('.key-letter');
        for (let i = 0; i < letter.length; i++) {
          letter[i].classList.toggle('upperLetter');
        }
      } else main.innerHTML = mainHtmlRu;
      localStorage.setItem('currentLanguage', 'ru');
      caps = document.querySelector('.key-caps');
      letter = document.querySelectorAll('.key-letter');
      flagShortcut = false;
    } else {
      if (letter[0].classList.contains('upperLetter')) {
        main.innerHTML = mainHtml;
        letter = document.querySelectorAll('.key-letter');
        for (let i = 0; i < letter.length; i++) {
          letter[i].classList.toggle('upperLetter');
        }
      } else main.innerHTML = mainHtml;
      localStorage.setItem('currentLanguage', 'eng');
      caps = document.querySelector('.key-caps');
      letter = document.querySelectorAll('.key-letter');
      flagShortcut = false;
    }
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key == "CapsLock") {
    caps.classList.toggle('green-active');
    for (let i = 0; i < letter.length; i++) {
      letter[i].classList.toggle('upperLetter');
    }
    
  }
  if (e.ctrlKey && e.shiftKey) {
    flagShortcut = true;
  }
});

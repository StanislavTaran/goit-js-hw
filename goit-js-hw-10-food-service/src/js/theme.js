const refs = {
  switchTheme: document.querySelector('input.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    refs.switchTheme.setAttribute(`checked`, `checked`);
  } else if (localStorage.getItem('theme') === Theme.LIGHT) {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
  }
}

function switchToogle() {
  refs.switchTheme.toggleAttribute(`checked`);

  if (refs.switchTheme.hasAttribute(`checked`)) {
    localStorage.setItem('theme', Theme.DARK);
    changeTheme();
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    changeTheme();
  }
}
changeTheme();
refs.switchTheme.addEventListener('change', switchToogle);

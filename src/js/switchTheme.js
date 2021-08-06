const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};

const refs = {
    body: document.querySelector('body'),
    input: document.querySelector('#theme-switch-toggle'),
};
const STORAGE_KEY = "theme";

refs.body.classList.add(Theme.LIGHT);
refs.input.addEventListener('change', themeToggleHandler);
document.addEventListener('DOMContentLoaded', getLocalStorageTheme);

function themeToggleHandler() {
    // refs.input.toggleAttribute('checked');
    if (refs.input.checked) {
        localStorage.setItem('theme', Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(Theme.DARK);
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);
    }
}

function getLocalStorageTheme() {
    const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.DARK) {
      refs.body.classList.add(Theme.DARK);
      refs.body.classList.remove(Theme.LIGHT);
    refs.input.checked = true;
  }
}

import React, { useEffect } from 'react';

const ThemeSwitcher = () => {
  useEffect(() => {
    const themeButton = document.getElementById('theme-switcher-grid');
    const cristianContainer = document.querySelector('.cristianContainer');
    const storageKey = 'theme-preference';

    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const applyTheme = (theme) => {
      if (theme === 'dark') {
        cristianContainer.classList.add('dark-theme');
        themeButton.classList.add('night-theme');
        localStorage.setItem(storageKey, 'dark');
      } else if (theme === 'light') {
        cristianContainer.classList.remove('dark-theme');
        themeButton.classList.remove('night-theme');
        localStorage.setItem(storageKey, 'light');
      } else if (theme === 'system') {
        cristianContainer.classList.remove('dark-theme');
        themeButton.classList.remove('night-theme');
        localStorage.removeItem(storageKey);
      }
    };

    const toggleTheme = () => {
      const currentPreference = localStorage.getItem(storageKey) || defaultTheme;
      const nextTheme = currentPreference === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    };

    themeButton.addEventListener('click', toggleTheme);

    const savedTheme = localStorage.getItem(storageKey);
    const initialTheme = savedTheme || defaultTheme;
    applyTheme(initialTheme);

    return () => {
      themeButton.removeEventListener('click', toggleTheme);
    };
  }, []);

  return null;
};

export default ThemeSwitcher;
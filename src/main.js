import './style.css';
import { defaultState, themeOptions } from './modules/calendarData.js';
import { renderControls, renderCover, renderMonth } from './modules/renderCalendar.js';
import { renderCheckout, unlockPremium } from './modules/checkout.js';

const appState = {
  ...defaultState,
  themeOptions
};

function getAppRoot() {
  return typeof document !== 'undefined' ? document.querySelector('#app') : null;
}

function renderApp() {
  const app = getAppRoot();
  if (!app) return;

  app.innerHTML = `
    <div class="app-shell ${appState.theme}">
      ${renderControls(appState)}
      ${renderCover(appState)}
      ${renderCheckout(appState)}
      <main class="month-grid">
        ${Array.from({ length: 12 }, (_, index) => renderMonth(appState, index)).join('')}
      </main>
    </div>
  `;

  document.querySelectorAll('.theme-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedTheme = button.dataset.theme;
      const selectedTier = button.dataset.tier;

      if (selectedTier === 'pro' && !appState.premium) {
        const premiumState = unlockPremium(appState);
        premiumState.theme = selectedTheme;
        renderApp();
        return;
      }

      appState.theme = selectedTheme;
      renderApp();
    });
  });

  document.querySelector('#yearInput')?.addEventListener('input', (event) => {
    const value = Number.parseInt(event.target.value, 10);
    if (Number.isFinite(value)) {
      appState.year = value;
      renderApp();
    }
  });

  document.querySelector('#coverTitleInput')?.addEventListener('input', (event) => {
    appState.coverTitle = event.target.value || '2027';
    renderApp();
  });

  document.querySelector('#coverSubtitleInput')?.addEventListener('input', (event) => {
    appState.coverSubtitle = event.target.value || 'A year of good plans and brighter days.';
    renderApp();
  });

  document.querySelector('#footnoteInput')?.addEventListener('input', (event) => {
    appState.footnote = event.target.value || 'Made with intention.';
    renderApp();
  });
}

if (typeof document !== 'undefined') {
  renderApp();
}

export { appState, renderApp };

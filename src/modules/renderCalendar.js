import { monthNames, weekdayNames, holidayMap } from './calendarData.js';

export function daysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

export function firstDayOffset(year, monthIndex) {
  return new Date(year, monthIndex, 1).getDay();
}

export function getHolidayForDate(year, dateKey) {
  return holidayMap[year]?.[dateKey] || null;
}

export function monthGrid(year, monthIndex, showHolidayNames = true) {
  const totalDays = daysInMonth(year, monthIndex);
  const offset = firstDayOffset(year, monthIndex);
  const cells = [];

  for (let i = 0; i < offset; i += 1) {
    cells.push('<span class="day is-muted"></span>');
  }

  for (let day = 1; day <= totalDays; day += 1) {
    const dateKey = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const holiday = showHolidayNames ? getHolidayForDate(year, dateKey) : null;
    const isWeekend = [0, 6].includes(new Date(year, monthIndex, day).getDay());

    cells.push(`
      <span class="day ${isWeekend ? 'is-weekend' : ''} ${holiday ? 'is-holiday' : ''}">
        <em>${day}</em>
        ${holiday ? `<small>${holiday}</small>` : ''}
      </span>
    `);
  }

  return cells.join('');
}

export function renderControls(appState) {
  return `
    <header class="topbar">
      <div>
        <p class="eyebrow">Calendar Studio</p>
        <h1>${appState.year} Planner</h1>
      </div>

      <div class="toolbar">
        <label class="field compact">
          <span>Year</span>
          <input id="yearInput" type="number" min="2024" max="2100" value="${appState.year}" />
        </label>

        <div class="theme-picker" aria-label="Color themes">
          ${appState.themeOptions.map(option => `
            <button
              class="theme-btn ${appState.theme === option.value ? 'active' : ''} ${option.tier === 'pro' && !appState.premium ? 'is-pro' : ''}"
              type="button"
              data-theme="${option.value}"
              data-tier="${option.tier}"
              aria-label="${option.label} theme"
            >
              ${option.label}
              ${option.tier === 'pro' ? '<span class="tier-tag">Pro</span>' : ''}
            </button>
          `).join('')}
        </div>
      </div>
    </header>

    <section class="editor-panel">
      <label class="field">
        <span>Cover title</span>
        <input id="coverTitleInput" type="text" value="${appState.coverTitle}" />
      </label>

      <label class="field">
        <span>Subtitle</span>
        <input id="coverSubtitleInput" type="text" value="${appState.coverSubtitle}" />
      </label>

      <label class="field">
        <span>Footer note</span>
        <input id="footnoteInput" type="text" value="${appState.footnote}" />
      </label>
    </section>
  `;
}

export function renderCover(appState) {
  return `
    <section class="cover-card ${appState.premium ? 'is-premium' : ''}">
      <div class="cover-copy">
        <p class="eyebrow">${appState.premium ? 'Premium cover' : 'Free cover'}</p>
        <h2>${appState.coverTitle}</h2>
        <p>${appState.coverSubtitle}</p>
      </div>
      <div class="cover-meta">
        <span>${appState.year}</span>
        <small>${appState.footnote}</small>
      </div>
    </section>
  `;
}

export function renderMonth(appState, monthIndex) {
  return `
    <article class="month-card ${appState.premium ? 'is-premium' : ''}">
      <header class="month-header">
        <h3>${monthNames[monthIndex]}</h3>
        <span>${appState.year}</span>
      </header>

      <div class="weekday-row">
        ${weekdayNames.map(day => `<span>${day}</span>`).join('')}
      </div>

      <div class="days-grid">
        ${monthGrid(appState.year, monthIndex, true)}
      </div>
    </article>
  `;
}

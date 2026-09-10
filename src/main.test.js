import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { appState, renderApp } from './main.js';

describe('Calendar Studio app', () => {
  beforeEach(() => {
    const dom = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>', { url: 'http://localhost:5173/' });
    global.window = dom.window;
    global.document = dom.window.document;
    global.HTMLElement = dom.window.HTMLElement;
    global.Node = dom.window.Node;
    appState.year = 2027;
    appState.theme = 'sunset';
    appState.coverTitle = '2027';
    appState.coverSubtitle = 'A year of good plans and brighter days.';
    appState.footnote = 'Made with intention.';
  });

  it('renders the cover and twelve month cards', () => {
    renderApp();
    const app = document.querySelector('#app');
    expect(app).not.toBeNull();
    expect(app.textContent).toContain('2027');
    expect(document.querySelectorAll('.month-card')).toHaveLength(12);
  });

  it('updates the UI when the year changes', () => {
    renderApp();
    const yearInput = document.querySelector('#yearInput');
    yearInput.value = '2028';
    yearInput.dispatchEvent(new window.Event('input', { bubbles: true }));
    expect(appState.year).toBe(2028);
    expect(document.querySelector('.cover-meta span').textContent).toContain('2028');
  });
});

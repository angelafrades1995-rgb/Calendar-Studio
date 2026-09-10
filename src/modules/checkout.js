import { pricingPlans } from './calendarData.js';

export function renderCheckout(appState) {
  return `
    <aside class="checkout-panel ${appState.premium ? 'is-unlocked' : ''}">
      <div class="checkout-header">
        <p class="eyebrow">Monetization</p>
        <h3>${appState.premium ? 'Pro Access Unlocked' : 'Upgrade for premium exports'}</h3>
      </div>

      <div class="pricing-grid">
        ${pricingPlans.map(plan => `
          <article class="pricing-card ${plan.featured ? 'featured' : ''}">
            <div class="plan-row">
              <h4>${plan.name}</h4>
              <span class="plan-price">${plan.price}</span>
            </div>
            <p>${plan.description}</p>
            <ul>
              ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="${plan.link}" target="_blank" rel="noreferrer" class="plan-button">
              ${plan.cta}
            </a>
          </article>
        `).join('')}
      </div>
    </aside>
  `;
}

export function unlockPremium(state) {
  state.premium = true;
  state.theme = 'botanical';
  return state;
}

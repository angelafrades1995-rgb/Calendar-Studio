export const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const themeOptions = [
  { value: 'sunset', label: 'Sunset', tier: 'free' },
  { value: 'forest', label: 'Forest', tier: 'free' },
  { value: 'night', label: 'Night', tier: 'free' },
  { value: 'lavender', label: 'Lavender', tier: 'free' },
  { value: 'girly', label: 'Girly', tier: 'free' },
  { value: 'peach', label: 'Peach', tier: 'free' },
  { value: 'botanical', label: 'Botanical', tier: 'pro' },
  { value: 'editorial', label: 'Editorial', tier: 'pro' },
  { value: 'nordic', label: 'Nordic', tier: 'pro' },
  { value: 'midnight', label: 'Midnight', tier: 'pro' },
  { value: 'bauhaus', label: 'Bauhaus', tier: 'pro' },
  { value: 'ocean', label: 'Ocean', tier: 'pro' },
  { value: 'vintage', label: 'Vintage', tier: 'pro' }
];

export const holidayMap = {
  2027: {
    '2027-01-01': 'New Year',
    '2027-02-14': 'Valentine',
    '2027-03-08': 'Women’s Day',
    '2027-04-10': 'Easter Sunday',
    '2027-05-01': 'Labor Day',
    '2027-05-17': 'Mother’s Day',
    '2027-06-20': 'Summer Solstice',
    '2027-07-04': 'Independence',
    '2027-09-06': 'Labor & Gratitude',
    '2027-11-11': 'Veterans Day',
    '2027-12-25': 'Christmas'
  }
};

export const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Standard downloads and core layouts for organic growth.',
    features: [
      'Basic PDF export',
      'Standard themes',
      'Small footer watermark',
      'Quick sharing preview'
    ],
    cta: 'Use free version',
    link: '#free'
  },
  {
    name: 'Pro Export',
    price: '$6',
    description: '300 DPI print-ready downloads with premium features unlocked.',
    features: [
      'Ultra-sharp 300 DPI PDFs',
      'Watermark removal',
      'Custom font uploads',
      'Arched Deco, Botanical, Habit Tracker templates',
      'Stripe Payment Link checkout'
    ],
    cta: 'Upgrade with Stripe',
    link: 'https://buy.stripe.com/test_5kA6rbe1Q9S7aYk9AA',
    featured: true
  }
];

export const defaultState = {
  year: 2027,
  theme: 'sunset',
  coverTitle: '2027',
  coverSubtitle: 'A year of good plans and brighter days.',
  footnote: 'Made with intention.',
  premium: false
};

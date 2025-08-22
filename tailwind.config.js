/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './addons/tatd/static/src/js/**/*.js',
    './addons/tatd/static/src/xml/**/*.xml',
    './addons/tatd/static/src/**/*.html',
    './addons/tatd/views/**/*.xml',
  ],
  theme: {
    extend: {
      colors: {
        'tatd-primary': '#3b82f6',
        'tatd-secondary': '#64748b',
        'tatd-accent': '#10b981',
        'tatd-danger': '#ef4444',
        'tatd-warning': '#f59e0b',
        'tatd-success': '#22c55e',
      }
    },
  },
  plugins: [],
  // Add prefix to scope all Tailwind classes
  prefix: 'tw-',
  // Ensure compatibility with Odoo's existing CSS
  corePlugins: {
    preflight: false, // Disable preflight to avoid conflicts with Odoo
  }
}

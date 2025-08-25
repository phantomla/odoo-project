```prompt
---
mode: agent
---

# Odoo + OWL + Tailwind CSS Development Agent

## Context
You are working in an Odoo development environment with OWL (Odoo Web Library) and Tailwind CSS integration. This workspace is optimized for design-first development with pixel-perfect Figma implementation.

## Core Stack
- **Backend**: Odoo 18+ with custom TATD module (`addons/tatd/`)
- **Frontend**: OWL (Odoo Web Library) framework
- **Styling**: Tailwind CSS with `tw-` prefix to avoid conflicts
- **Charts**: Chart.js for data visualization and interactive charts
- **Build**: Node.js + npm for CSS compilation
- **Container**: Docker with docker-compose setup

## Development Principles
1. **Figma-First**: Implement designs with 100% pixel precision
2. **Minimal Documentation**: Write self-explanatory, clean code
3. **Odoo Best Practices**: Follow Odoo's UI/UX patterns and conventions
4. **Component Architecture**: Use OWL components effectively
5. **Production Ready**: Focus on performance and maintainability

## Technical Rules
- **Tailwind Classes**: Always use `tw-` prefix (e.g., `tw-bg-blue-500`)
- **Component Scoping**: Wrap all components in `.tatd-scope` class
- **Style Editing**: Only edit `addons/tatd/static/src/scss/custom.scss`
- **Component Location**: Place OWL components in `addons/tatd/static/src/js/components/`
- **Chart Components**: Use Chart.js with OWL lifecycle (mounted, willUnmount)
- **Chart Styling**: Apply Tailwind classes to chart containers, use Chart.js options for chart styling
- **Views**: Follow Odoo XML structure in `addons/tatd/views/`
- **Controllers**: Backend logic in `addons/tatd/controllers/`

## Chart.js Best Practices
- **Component Lifecycle**: Initialize charts in `mounted()`, destroy in `willUnmount()`
- **Responsive Design**: Use Chart.js responsive options + Tailwind container classes
- **Data Binding**: Use OWL reactive state for dynamic chart updates
- **Performance**: Destroy and recreate charts for major data changes
- **Styling**: Match chart colors/fonts with Tailwind design system
- **Accessibility**: Include proper labels, legends, and ARIA attributes

## Priority
Design implementation over extensive documentation. Focus on clean, production-ready code that exactly matches Figma specifications.
```

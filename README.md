# Odoo + OWL + Tailwind CSS Project

Simple setup for using Tailwind CSS with Odoo OWL framework.

## Quick Start

### Prerequisites
- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (for Tailwind CSS)

### 1. Setup Odoo
```bash
# Start Odoo containers
docker-compose up -d

# Access: http://localhost:8069
# Install "TATD" module from Apps menu
```

### 2. Setup Tailwind CSS
```bash
# Install dependencies
npm install

# Build CSS for production
npm run build-css

# Development mode (watch for changes)
npm run dev:watch
```

### 3. Apply Changes
```bash
# Restart Odoo to load new CSS
docker-compose restart web

# Update module: Apps > TATD > Upgrade
```

## Build Commands

| Command | Purpose |
|---------|---------|
| `npm run build-css` | Build minified CSS for production |
| `npm run dev:watch` | Watch mode for development |
| `npm run clean` | Remove generated CSS file |

## File Structure

```
addons/tatd/static/src/scss/
├── custom.scss      # Input file (edit this)
└── tailwind.css     # Generated file (don't edit)
```

## Development Workflow

1. **Edit styles**: Modify `addons/tatd/static/src/scss/custom.scss`
2. **Build CSS**: Run `npm run build-css` or `npm run dev:watch`
3. **Restart Odoo**: `docker-compose restart web`
4. **Update module**: Apps > TATD > Upgrade

## Configuration

- **Tailwind classes**: Use `tw-` prefix (e.g., `tw-bg-blue-500`)
- **Scoping**: Wrap components in `.tatd-scope` class
- **Conflicts**: Prevented by disabling Tailwind preflight

## Project Structure

```
odoo-project/
├── addons/tatd/           # Custom Odoo module
├── config/odoo.conf       # Odoo configuration
├── docker-compose.yml     # Docker setup
├── package.json           # Node.js dependencies
├── tailwind.config.js     # Tailwind configuration
└── dev-frontend.sh        # Development script
```

That's it! Keep it simple. 🚀

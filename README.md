# Odoo with Owl Project

This project contains an Odoo instance with a custom module that demonstrates the use of Owl framework.

## Project Structure

```
odoo-project/
├── addons/                  # Custom addons
│   └── my_custom_module/    # Our custom module with Owl components
├── config/                  # Odoo configuration
│   └── odoo.conf            # Odoo configuration file
└── docker-compose.yml       # Docker Compose configuration
```

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the application

1. Start the containers:
   ```bash
   cd odoo-project
   docker-compose up -d
   ```

2. Access Odoo:
   - URL: http://localhost:8069
   - Create a database when prompted
   - Install the "My Custom Module" from the Apps menu

### Accessing the Owl components

After installation:

- Backend: Go to "Owl Examples" > "My Custom Owl Page" in the main menu
- Frontend: Navigate to http://localhost:8069/my-owl-page in your browser

## Development

To modify the Owl components:

1. Edit files in the `addons/my_custom_module/` directory
2. Restart the Odoo container to apply changes:
   ```bash
   docker-compose restart web
   ```
3. Update the module in Odoo: Apps > My Custom Module > Upgrade

## Stopping the application

```bash
docker-compose down
```

To remove all data (including database):
```bash
docker-compose down -v
```

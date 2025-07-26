# my_custom_module/__manifest__.py
{
    'name': 'My Custom Module',
    'version': '1.0',
    'category': 'Website',
    'summary': 'Customizations for Odoo using Owl',
    'depends': ['web', 'website'], # 'web' is essential for Owl, 'website' for web pages
    'data': [
        'views/my_custom_page.xml', # Our custom page
    ],
    'assets': {
        'web.assets_backend': [ # For backend Owl apps
            # Original components
            'my_custom_module/static/src/js/my_owl_component.js',
            'my_custom_module/static/src/scss/my_owl_component.scss',
            'my_custom_module/static/src/js/my_owl_page_action.js',
        ],
        'web.assets_frontend': [ # For frontend Owl apps
            # Original components
            'my_custom_module/static/src/js/my_owl_component.js',
            'my_custom_module/static/src/scss/my_owl_component.scss',
            'my_custom_module/static/src/js/frontend_app.js',
        ],
    },
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}

# tatd/__manifest__.py
{
    'name': 'TATD',
    'version': '1.0',
    'category': 'Administration',
    'summary': 'Simple Tailwind CSS Dashboard using Owl',
    'depends': ['web'],
    'data': [
        'views/tatd.xml',
    ],
    'assets': {
        'web.assets_backend': [
            # External libraries
            ('include', 'web._assets_helpers'),
            'https://cdn.jsdelivr.net/npm/chart.js',

            # Auto-import all JS files recursively (except main.js)
            'tatd/static/src/js/components/**/*.js',
            'tatd/static/src/js/pages/**/*.js',
            'tatd/static/src/js/utils/**/*.js',

            # Main.js must be loaded last for proper action registration
            'tatd/static/src/js/main.js',
            # CSS
            'tatd/static/src/scss/tailwind.css',
        ],
    },
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}

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
            # Basic components
            'tatd/static/src/js/components/BasicComponent.js',
            'tatd/static/src/js/pages/TatdDashboard.js',
            # Main entry point
            'tatd/static/src/js/main.js',
            # Full Tailwind CSS
            'tatd/static/src/scss/tailwind.css',
        ],
    },
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}

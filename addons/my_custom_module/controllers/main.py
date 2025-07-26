from odoo import http
from odoo.http import request
import json

class MyCustomPage(http.Controller):
    @http.route(['/my-owl-page', '/owl-demo'], type='http', auth='public', website=True)
    def render_my_owl_page(self, **kw):
        # Get dynamic data from the database or other sources
        user = request.env.user
        company = user.company_id
        
        # Sample data - in a real scenario, you might fetch this from models
        items = ['Dynamic Item 1', 'Dynamic Item 2', 'Dynamic Item 3']
        
        # Prepare context with data for the template
        context = {
            'active_id': 'my_owl_page',
            'user_name': user.name,
            'company_name': company.name,
            'items_json': json.dumps(items)
        }
        
        return request.render('my_custom_module.my_owl_frontend_template', context)

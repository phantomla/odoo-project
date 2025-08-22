from odoo import http
from odoo.http import request
import json

class TatdController(http.Controller):
    @http.route(['/tatd/dashboard/data'], type='json', auth='user')
    def get_dashboard_data(self, **kw):
        """
        Backend JSON route for dashboard data.
        This endpoint can be used to fetch data for the Tailwind dashboard.
        """
        # Basic user information
        user = request.env.user
        
        # Basic response structure
        data = {
            'user': {
                'id': user.id,
                'name': user.name,
            },
            'dashboard': {
                # You can add your custom data here
            }
        }
        
        return data

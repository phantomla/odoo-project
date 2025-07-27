from odoo import http
from odoo.http import request
import json

class MyCustomPage(http.Controller):
    @http.route(['/my-owl-page', '/owl-demo'], type='http', auth='public', website=True)
    def render_my_owl_page(self, **kw):
        # Get dynamic data from the database or other sources
        user = request.env.user
        company = user.company_id
        
        # Note: For now, we are not using this data since we have hardcoded data in the frontend
        # In a real application, you would prepare the data here and pass it to the template
        
        # Sample data structure - this matches our hardcoded structure in frontend_app.js
        # In a real app, this would come from your Odoo models
        items = [
            {"id": 1, "name": "Project Alpha", "status": "In Progress", "completion": 65},
            {"id": 2, "name": "Client Meeting", "status": "Scheduled", "completion": 0},
            {"id": 3, "name": "Database Migration", "status": "Completed", "completion": 100},
            {"id": 4, "name": "UI Design Review", "status": "Pending", "completion": 30}
        ]
        
        stats = {
            "totalProjects": 12,
            "completedProjects": 5,
            "activeUsers": 8,
            "averageCompletion": 68
        }
        
        notifications = [
            {"id": 1, "message": "New task assigned: Documentation update", "time": "10 minutes ago", "read": False},
            {"id": 2, "message": "Team meeting at 3:00 PM", "time": "1 hour ago", "read": True},
            {"id": 3, "message": "Project Alpha deadline updated", "time": "2 days ago", "read": True}
        ]
        
        # Prepare context with data for the template
        context = {
            'active_id': 'my_owl_page',
            'user_name': user.name,
            'company_name': company.name,
            'items_json': json.dumps(items),
            'stats_json': json.dumps(stats),
            'notifications_json': json.dumps(notifications)
        }
        
        return request.render('my_custom_module.my_owl_frontend_template', context)

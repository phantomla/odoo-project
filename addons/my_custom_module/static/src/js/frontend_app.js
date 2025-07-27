/** @odoo-module **/

import { mount, Component, xml, useEnv } from "@odoo/owl";
import { MyOwlComponent } from "./my_owl_component"; // Import your Owl component

// Function to mount the Owl component when the DOM is ready
function mountOwlApp() {
    const container = document.getElementById("my_owl_app_container");
    if (container) {
        // Hard-coded data for demonstration
        const props = {
            userName: "John Doe",
            company: "EntroSoft",
            userImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
            items: [
                { id: 1, name: "Project Alpha", status: "In Progress", completion: 65 },
            ],
            stats: {
                totalProjects: 12,
                completedProjects: 5,
                activeUsers: 8,
                averageCompletion: 68
            },
            notifications: [
                { id: 1, message: "New task assigned: Documentation update", time: "10 minutes ago", read: false },
            ]
        };
        
        // Create a wrapper component to provide environment and props
        class OwlComponentWrapper extends Component {
            static template = xml`<MyOwlComponent userName="props.userName" 
                                                company="props.company" 
                                                items="props.items"
                                                userImage="props.userImage"
                                                stats="props.stats"
                                                notifications="props.notifications"/>`;
            static components = { MyOwlComponent };
            
            setup() {
                this.props = props;
            }
        }
        
        mount(OwlComponentWrapper, { target: container });
    }
}

// Ensure the app mounts after the DOM is fully loaded
// This is a common pattern for frontend apps in Odoo
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountOwlApp);
} else {
    mountOwlApp();
}

// Ensure the app mounts after the DOM is fully loaded
// This is a common pattern for frontend apps in Odoo
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountOwlApp);
} else {
    mountOwlApp();
}

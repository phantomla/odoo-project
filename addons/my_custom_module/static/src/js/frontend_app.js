/** @odoo-module **/

import { mount, Component, xml, useEnv } from "@odoo/owl";
import { MyOwlComponent } from "./my_owl_component"; // Import your Owl component

// Function to mount the Owl component when the DOM is ready
function mountOwlApp() {
    const container = document.getElementById("my_owl_app_container");
    if (container) {
        // Extract data from the container's data attributes
        const props = {
            userName: container.dataset.userName || 'Guest',
            company: container.dataset.company || 'Unknown Company',
            items: JSON.parse(container.dataset.items || '[]')
        };
        
        // Create a wrapper component to provide environment and props
        class OwlComponentWrapper extends Component {
            static template = xml`<MyOwlComponent userName="props.userName" company="props.company" items="props.items"/>`;
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

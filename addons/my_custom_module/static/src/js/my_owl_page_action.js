/** @odoo-module **/

import { Component, xml, useEnv } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { session } from "@web/session";
import { MyOwlComponent } from "./my_owl_component"; // Import your Owl component

// Define the action component that will render your Owl app
class MyOwlPageAction extends Component {
    static template = xml`<div class="o_my_owl_page_action">
        <MyOwlComponent userName="userName" company="company" items="items"/>
    </div>`;

    static components = { MyOwlComponent }; // Declare the component you're using
    
    setup() {
        // Access Odoo environment
        const env = useEnv();
        
        // Set data with safe default values
        this.userName = "Odoo User";
        this.company = "Your Company";
        this.items = ["Backend Item 1", "Backend Item 2", "Backend Item 3"];
        
        // Try to get session information if available
        try {
            if (session && session.name) {
                this.userName = session.name;
            }
            if (session && session.company_name) {
                this.company = session.company_name;
            }
        } catch (error) {
            console.log("Could not access session information:", error);
        }
        
        // You can also make RPC calls to fetch data
        // Example (commented out):
        // orm.call("res.partner", "search_read", [[["is_company", "=", true]]], {fields: ["name"]})
        //    .then(partners => {
        //        this.items = partners.map(p => p.name);
        //    });
    }
}

// Register the client action
registry.category("actions").add("my_custom_module.my_owl_page_action", MyOwlPageAction);

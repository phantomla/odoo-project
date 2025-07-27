/** @odoo-module **/

import { Component, xml, useEnv } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { MyOwlComponent } from "./my_owl_component"; // Import your Owl component

// Define the action component that will render your Owl app
class MyOwlPageAction extends Component {
    static template = xml`<div class="o_my_owl_page_action">
        <MyOwlComponent userName="userName" company="company" leftItems="leftItems" rightItems="rightItems" userImage="userImage" notifications="notifications"/>
    </div>`;

    static components = { MyOwlComponent }; // Declare the component you're using
    
    setup() {
        // Access Odoo environment
        const env = useEnv();
        
        // Hardcoded data for the UI
        this.userName = "John Doe";
        this.company = "EntroSoft";
        
        // Hardcoded user image (using a placeholder)
        this.userImage = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
        
        // Left panel items with 3 categories
        this.leftItems = {
            category1: [
                { id: 1, name: "Item 1-1", count: 5 },
                { id: 2, name: "Item 1-2", count: 3 },
                { id: 3, name: "Item 1-3", count: 7 }
            ],
            category2: [
                { id: 4, name: "Item 2-1", count: 2 },
                { id: 5, name: "Item 2-2", count: 9 }
            ],
            category3: [
                { id: 6, name: "Item 3-1", count: 4 },
                { id: 7, name: "Item 3-2", count: 1 },
                { id: 8, name: "Item 3-3", count: 6 }
            ],
            category4: [
                { id: 9, name: "Item 4-1", count: 8 },
                { id: 10, name: "Item 4-2", count: 0 }
            ],
            category5: [
                { id: 11, name: "Item 5-1", count: 10 },
                { id: 12, name: "Item 5-2", count: 12 }
            ],
            category6: [
                { id: 13, name: "Item 6-1", count: 3 },
                { id: 14, name: "Item 6-2", count: 4 }
            ],
            category7: [
                { id: 15, name: "Item 7-1", count: 2 },
                { id: 16, name: "Item 7-2", count: 5 }
            ],
            category8: [
                { id: 17, name: "Item 8-1", count: 1 },
                { id: 18, name: "Item 8-2", count: 6 }
            ],
            category9: [
                { id: 19, name: "Item 9-1", count: 3 },
                { id: 20, name: "Item 9-2", count: 4 }
            ],
            category10: [
                { id: 21, name: "Item 10-1", count: 2 },
                { id: 22, name: "Item 10-2", count: 5 }
            ],
            category11: [
                { id: 23, name: "Item 11-1", count: 1 },
                { id: 24, name: "Item 11-2", count: 6 }
            ],
            category12: [
                { id: 25, name: "Item 12-1", count: 3 },
                { id: 26, name: "Item 12-2", count: 4 }
            ],
        };
        
        // Right panel items organized by categories (3 sections per category)
        this.rightItems = {
            // Category 1 (sections 1-3)
            section1: [
                { id: 101, title: "Title 1-1", description: "Category 1 content", value: "Value 1-1" },
                { id: 102, title: "Title 1-2", description: "Some details for category 1" }
            ],
            section2: [
                { id: 201, title: "Title 2-1", description: "Also for category 1", value: "Value 2-1" },
                { id: 202, title: "Title 2-2", description: "More information for category 1" }
            ],
            section3: [
                { id: 301, title: "Title 3-1", description: "Last section for category 1", value: "Value 3-1" }
            ],
            
            // Category 2 (sections 4-6)
            section4: [
                { id: 401, title: "Title 4-1", description: "Category 2 content", value: "Value 4-1" },
                { id: 402, title: "Title 4-2", description: "Second item in category 2" }
            ],
            section5: [
                { id: 501, title: "Title 5-1", description: "More category 2 content", value: "Value 5-1" }
            ],
            section6: [
                { id: 601, title: "Title 6-1", description: "Last section for category 2", value: "Value 6-1" }
            ],
            
            // Category 3 (sections 7-9)
            section7: [
                { id: 701, title: "Title 7-1", description: "Category 3 content", value: "Value 7-1" }
            ],
            section8: [
                { id: 801, title: "Title 8-1", description: "Second section in category 3", value: "Value 8-1" }
            ],
            section9: [
                { id: 901, title: "Title 9-1", description: "Last section for category 3", value: "Value 9-1" }
            ],
            
            // Category 4 (sections 10-12)
            section10: [
                { id: 1001, title: "Title 10-1", description: "Category 4 content", value: "Value 10-1" }
            ],
            section11: [
                { id: 1101, title: "Title 11-1", description: "Second section in category 4", value: "Value 11-1" }
            ],
            section12: [
                { id: 1201, title: "Title 12-1", description: "Last section for category 4", value: "Value 12-1" }
            ],
            
            // Category 5 (sections 13-15)
            section13: [
                { id: 1301, title: "Title 13-1", description: "Category 5 content", value: "Value 13-1" }
            ],
            section14: [
                { id: 1401, title: "Title 14-1", description: "Second section in category 5", value: "Value 14-1" }
            ],
            section15: [
                { id: 1501, title: "Title 15-1", description: "Last section for category 5", value: "Value 15-1" }
            ],
            
            // Category 6 (sections 16-18)
            section16: [
                { id: 1601, title: "Title 16-1", description: "Category 6 content", value: "Value 16-1" }
            ],
            section17: [
                { id: 1701, title: "Title 17-1", description: "Second section in category 6", value: "Value 17-1" }
            ],
            section18: [
                { id: 1801, title: "Title 18-1", description: "Last section for category 6", value: "Value 18-1" }
            ],
            
            // Category 7 (sections 19-21)
            section19: [
                { id: 1901, title: "Title 19-1", description: "Category 7 content", value: "Value 19-1" }
            ],
            section20: [
                { id: 2001, title: "Title 20-1", description: "Second section in category 7", value: "Value 20-1" }
            ],
            section21: [
                { id: 2101, title: "Title 21-1", description: "Last section for category 7", value: "Value 21-1" }
            ],
            // Category 8 (sections 22-24)
            section22: [
                { id: 2201, title: "Title 22-1", description: "Category 8 content", value: "Value 22-1" }
            ],
            section23: [
                { id: 2301, title: "Title 23-1", description: "Second section in category 8", value: "Value 23-1" }
            ],
            section24: [
                { id: 2401, title: "Title 24-1", description: "Last section for category 8", value: "Value 24-1" }
            ],
            // Additional categories can be added here
            // Category 9 (sections 25-27)
            section25: [
                { id: 2501, title: "Title 25-1", description: "Category 9 content", value: "Value 25-1" }
            ],
            section26: [
                { id: 2601, title: "Title 26-1", description: "Second section in category 9", value: "Value 26-1" }
            ],
            section27: [
                { id: 2701, title: "Title 27-1", description: "Last section for category 9", value: "Value 27-1" }
            ],
            // Category 10 (sections 28-30)
            section28: [
                { id: 2801, title: "Title 28-1", description: "Category 10 content", value: "Value 28-1" }
            ],
            section29: [
                { id: 2901, title: "Title 29-1", description: "Second section in category 10", value: "Value 29-1" }
            ],
            section30: [
                { id: 3001, title: "Title 30-1", description: "Last section for category 10", value: "Value 30-1" }
            ],
            // Category 11 (sections 31-33)
            section31: [
                { id: 3101, title: "Title 31-1", description: "Category 11 content", value: "Value 31-1" }
            ],
        };
        
        // Notifications
        this.notifications = [
            { id: 1, message: "New task assigned: Documentation update", time: "10 minutes ago", read: false },
        ];
    }
}


// Register the client action
registry.category("actions").add("my_custom_module.my_owl_page_action", MyOwlPageAction);

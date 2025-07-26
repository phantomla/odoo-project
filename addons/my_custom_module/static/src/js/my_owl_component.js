/** @odoo-module **/

import { Component, xml } from "@odoo/owl";
import { registry } from "@web/core/registry";

// Define your Owl component
class MyOwlComponent extends Component {
    static template = xml`<div class="my-owl-component">
        <h1>Hello, <t t-esc="props.userName"/>!</h1>
        <p>Welcome to <t t-esc="props.company"/>.</p>
        
        <div t-if="props.items.length > 0" class="items-container">
            <h3>Your Items:</h3>
            <ul>
                <li t-foreach="props.items" t-as="item" t-key="item">
                    <t t-esc="item"/>
                </li>
            </ul>
        </div>
        
        <button t-on-click="onClick">Click me!</button>
        <p t-if="state.clicked">Button clicked!</p>
    </div>`;

    static props = {
        userName: { type: String, optional: true },
        company: { type: String, optional: true },
        items: { type: Array, optional: true }
    };

    setup() {
        this.state = {
            clicked: false,
        };
    }

    onClick() {
        this.state.clicked = !this.state.clicked;
    }
}

// Register the component for use in QWeb templates
registry.category("web_components").add("MyOwlComponent", MyOwlComponent);

export { MyOwlComponent };

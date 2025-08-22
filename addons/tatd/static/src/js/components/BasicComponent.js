/** @odoo-module **/

import { Component, xml, useState } from "@odoo/owl";

/**
 * Basic Owl Component with minimal Tailwind CSS
 */
export class BasicComponent extends Component {
    static template = xml`
        <div class="tatd-scope">
            <div class="tw-p-4 tw-bg-white tw-rounded tw-border tw-border-gray-200">
                <h3 class="tw-text-lg tw-font-bold tw-mb-2 tw-text-gray-900"><t t-esc="props.title"/></h3>
                <p class="tw-text-gray-600 tw-mb-4"><t t-esc="props.description"/></p>
                <button t-on-click="onButtonClick" 
                        class="tw-px-4 tw-py-2 tw-bg-blue-500 tw-text-white tw-rounded tw-font-medium tw-transition-colors hover:tw-bg-blue-600 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500">
                    <t t-esc="props.buttonText"/>
                </button>
                <span t-if="state.clicked" class="tw-ml-3 tw-text-green-600 tw-font-medium">
                    ✓ Clicked!
                </span>
            </div>
        </div>
    `;

    static props = {
        title: { type: String, optional: true },
        description: { type: String, optional: true },
        buttonText: { type: String, optional: true },
        onAction: { type: Function, optional: true }
    };

    static defaultProps = {
        title: "Basic Component",
        description: "Simple component with Tailwind CSS",
        buttonText: "Click Me"
    };
    
    setup() {
        this.state = useState({
            clicked: false
        });
    }
    
    onButtonClick() {
        this.state.clicked = !this.state.clicked;
        
        if (this.props.onAction) {
            this.props.onAction(this.state.clicked);
        }
    }
}

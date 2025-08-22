/** @odoo-module **/

import { Component, xml, useState } from "@odoo/owl";

/**
 * Button Component
 * Reusable button with different variants and sizes
 */
export class Button extends Component {
    static template = xml`
        <button t-on-click="onClick" 
                t-att-class="getButtonClasses()"
                t-att-disabled="props.disabled">
            <span t-if="props.icon" t-att-class="getIconClasses()">
                <t t-esc="props.icon"/>
            </span>
            <span t-if="props.text">
                <t t-esc="props.text"/>
            </span>
            <t t-slot="default"/>
        </button>
    `;

    static props = {
        text: { type: String, optional: true },
        icon: { type: String, optional: true },
        variant: { type: String, optional: true }, // primary, secondary, danger, success
        size: { type: String, optional: true },    // sm, md, lg
        disabled: { type: Boolean, optional: true },
        onClick: { type: Function, optional: true }
    };

    static defaultProps = {
        variant: "primary",
        size: "md",
        disabled: false
    };

    getButtonClasses() {
        const baseClasses = "tw-inline-flex tw-items-center tw-justify-center tw-font-medium tw-rounded-lg tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2";
        
        // Size classes
        const sizeClasses = {
            sm: "tw-px-3 tw-py-1 tw-text-sm",
            md: "tw-px-4 tw-py-2 tw-text-sm",
            lg: "tw-px-6 tw-py-3 tw-text-base"
        };
        
        // Variant classes
        const variantClasses = {
            primary: "tw-bg-blue-500 tw-text-white hover:tw-bg-blue-600 focus:tw-ring-blue-500",
            secondary: "tw-bg-gray-200 tw-text-gray-900 hover:tw-bg-gray-300 focus:tw-ring-gray-500",
            danger: "tw-bg-red-600 tw-text-white hover:tw-bg-red-700 focus:tw-ring-red-500",
            success: "tw-bg-green-600 tw-text-white hover:tw-bg-green-700 focus:tw-ring-green-500"
        };
        
        const disabledClasses = this.props.disabled ? "tw-opacity-50 tw-cursor-not-allowed" : "";
        
        return `${baseClasses} ${sizeClasses[this.props.size]} ${variantClasses[this.props.variant]} ${disabledClasses}`;
    }
    
    getIconClasses() {
        return this.props.text ? "tw-mr-2" : "";
    }
    
    onClick(event) {
        if (!this.props.disabled && this.props.onClick) {
            this.props.onClick(event);
        }
    }
}

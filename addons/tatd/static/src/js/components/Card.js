/** @odoo-module **/

import { Component, xml } from '@odoo/owl';

/**
 * Card Component
 * Simple card layout with header and content
 */
export class Card extends Component {
    static template = xml`
        <div class="tatd-scope tw-bg-white tw-rounded-lg tw-shadow-lg tw-border tw-border-gray-200 tw-overflow-hidden">
            <!-- Header -->
            <div t-if="props.title or props.subtitle" class="tw-px-6 tw-py-4 tw-border-b tw-border-gray-200 tw-bg-gray-50">
                <h3 t-if="props.title" class="tw-text-lg tw-font-semibold tw-text-gray-900">
                    <t t-esc="props.title"/>
                </h3>
                <p t-if="props.subtitle" class="tw-text-sm tw-text-gray-600 tw-mt-1">
                    <t t-esc="props.subtitle"/>
                </p>
            </div>
            
            <!-- Content -->
            <div class="tw-px-6 tw-py-4">
                <t t-slot="default"/>
            </div>
        </div>
    `;

    static props = {
        title: { type: String, optional: true },
        subtitle: { type: String, optional: true },
    };
}

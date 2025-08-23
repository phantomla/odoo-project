/** @odoo-module **/

import { Component, xml, useState } from '@odoo/owl';
import { BasicComponent } from '../components/BasicComponent';

/**
 * Simple TATD Dashboard with basic Tailwind CSS utilities only
 */
export class TatdDashboard extends Component {
    static components = { BasicComponent };

    static template = xml`
        <div class="tatd-scope">
            <div class="tw-p-8 tw-bg-gray-50 tw-min-h-screen">
                <h1 class="tw-text-3xl tw-font-bold tw-text-center tw-mb-8 tw-text-gray-900">Tailwind CSS Dashboard</h1>
                
                <div class="tw-max-w-4xl tw-mx-auto tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
                    <BasicComponent 
                        title="'Basic Tailwind Component'"
                        description="'Using only basic Tailwind CSS classes'"
                        buttonText="'Test Component'"
                        onAction="(clicked) => this.handleAction(clicked)"
                    />
                    
                    <!-- Example card with basic Tailwind classes -->
                    <div class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-border tw-border-gray-200 tw-p-6">
                        <h3 class="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-3">Basic Tailwind Card</h3>
                        <p class="tw-text-gray-600 tw-mb-4">This card uses only basic Tailwind CSS utility classes.</p>
                        <div class="tw-flex tw-flex-wrap tw-gap-2">
                            <button class="tw-bg-blue-500 tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium tw-transition-colors hover:tw-bg-blue-600 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500">
                                Primary
                            </button>
                            <button class="tw-bg-green-500 tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium tw-transition-colors hover:tw-bg-green-600 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-500">
                                Success
                            </button>
                            <button class="tw-bg-red-500 tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium tw-transition-colors hover:tw-bg-red-600 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500">
                                Danger
                            </button>
                        </div>
                    </div>
                </div>
                
                <div t-if="state.message" class="tw-mt-6 tw-max-w-4xl tw-mx-auto tw-p-4 tw-bg-blue-50 tw-border tw-border-blue-200 tw-rounded-lg">
                    <p class="tw-text-blue-700 tw-font-medium"><t t-esc="state.message"/></p>
                </div>
            </div>
        </div>
    `;

    setup() {
        this.state = useState({
            message: '',
        });
    }

    handleAction(clicked) {
        this.state.message = clicked ? 'Component activated!' : 'Component deactivated!';
    }
}

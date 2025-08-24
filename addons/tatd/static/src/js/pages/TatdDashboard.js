/** @odoo-module **/

import { Component, xml, useState } from '@odoo/owl';
import { BasicComponent } from '../components/BasicComponent';
import { MyChart } from '../components/MyChart';

/**
 * Simple TATD Dashboard with basic Tailwind CSS utilities only
 */
export class TatdDashboard extends Component {
    static components = { BasicComponent, MyChart };

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
                </div>
                
                <div t-if="state.message" class="tw-mt-6 tw-max-w-4xl tw-mx-auto tw-p-4 tw-bg-blue-50 tw-border tw-border-blue-200 tw-rounded-lg">
                    <p class="tw-text-blue-700 tw-font-medium"><t t-esc="state.message"/></p>
                </div>

                <div class="tw-mt-6 tw-max-w-4xl tw-mx-auto tw-p-4 tw-bg-white tw-shadow tw-rounded-2xl">
                    <h2 class="tw-text-xl tw-font-semibold tw-mb-4 tw-text-gray-800">Chart Example</h2>
                    <MyChart />
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
        console.log('hello tyron: ' + this.state.message);
    }
}

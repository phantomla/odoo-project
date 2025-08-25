/** @odoo-module **/

import { Component, xml } from '@odoo/owl';

/**
 * Dashboard Header Component based on Figma design
 */
export class DashboardHeader extends Component {
    static template = xml`
        <div class="tw-w-full tw-h-16 tw-grid tw-items-center tw-shadow-sm" style="grid-template-columns: 400px 1fr 300px;">
            <!-- Column 1: Logo Section (400px) -->
            <div class="tw-flex tw-items-center tw-px-[22px] tw-gap-6 tw-w-full">
                <!-- Menu Icon -->
                <div class="tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-relative">
                    <img src="/tatd/static/src/img/icons/menu-hamburger.svg" alt="Menu" class="tw-w-10 tw-h-10"/>
                </div>
                
                <!-- Logo -->
                <div class="tw-flex-1 tw-flex tw-items-center">
                    <img src="/tatd/static/src/img/logo-tatd.png" alt="TADT Logo" class="tw-h-[52px] tw-w-auto tw-max-w-full tw-object-contain"/>
                </div>
            </div>

            <!-- Column 2: Center Content (Remaining space) -->
            <div class="tw-flex tw-items-center tw-justify-center tw-px-4">
                <h1 class="tw-text-3xl tw-font-bold tw-text-white tw-tracking-wide" style="font-family: 'Be Vietnam Pro', sans-serif;">
                    E-OFFICE
                </h1>
            </div>
            
            <!-- Column 3: Avatar Section (300px) -->
            <div class="tw-flex tw-items-center tw-justify-end tw-gap-6 tw-px-4 tw-w-full">
                <!-- Notification Icon with Badge -->
                <div class="tw-relative">
                    <div class="tw-w-10 tw-h-10 tw-bg-white tw-rounded-full tw-flex tw-items-center tw-justify-center tw-shadow-sm">
                        <!-- Notification Icon SVG -->
                        <img src="/tatd/static/src/img/icons/notification-icon.svg" alt="Notifications" class="tw-w-6 tw-h-6"/>
                    </div>
                    <!-- Red notification badge -->
                    <div class="tw-absolute tw-top-1 tw-right-1 tw-w-2 tw-h-2 tw-bg-red-500 tw-rounded-full tw-border tw-border-gray-100"></div>
                </div>
                
                <!-- Avatar with Status Badge -->
                <div class="tw-relative">
                    <div class="tw-w-12 tw-h-12 tw-bg-gray-300 tw-rounded-full tw-overflow-hidden tw-border-2 tw-border-white">
                        <!-- Avatar Image -->
                        <img src="/tatd/static/src/img/avatar.png" alt="User Avatar" height="48" class="tw-w-full tw-h-full tw-object-cover" />
                    </div>
                    <!-- Green status badge -->
                    <div class="tw-absolute tw-bottom-0 tw-right-0 tw-w-4 tw-h-4 tw-bg-gray-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                        <div class="tw-w-2.5 tw-h-2.5 tw-bg-green-500 tw-rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

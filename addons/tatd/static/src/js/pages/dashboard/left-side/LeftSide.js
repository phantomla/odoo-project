/** @odoo-module **/

import { Component, xml, useState } from '@odoo/owl';

/**
 * Dashboard Left Side Component
 */
export class DashboardLeftSide extends Component {
    setup() {
        this.state = useState({
            activeMenuItem: 'quan-ly-to-trinh',
        });
    }

    onMenuItemClick(menuId) {
        this.state.activeMenuItem = menuId;
    }

    getCurrentDate() {
        const now = new Date();
        return {
            month: now.toLocaleDateString('vi-VN', { month: 'long' }).toUpperCase(),
            year: now.getFullYear(),
            day: now.getDate(),
        };
    }

    generateCalendarDays() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();

        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();

        // Get day of week for first day (0 = Sunday, 1 = Monday, etc.)
        const startingDayOfWeek = firstDay.getDay();

        const days = [];

        // Add days from previous month if needed
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push({ day: '', isEmpty: true });
        }

        // Add days of current month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push({ day, isEmpty: false, isToday: day === now.getDate() });
        }

        // Fill remaining slots to complete the grid (6 rows × 7 days = 42 slots)
        while (days.length < 42) {
            days.push({ day: '', isEmpty: true });
        }

        return days;
    }

    static template = xml`
        <div class="tw-shadow-sm tw-h-[calc(100vh-3.5rem)] tw-w-[400px] tw-flex tw-flex-col tw-overflow-auto">
            <!-- Main Content -->
            <div class="tw-flex-1 tw-flex tw-flex-col tw-px-4 tw-pb-4 tw-overflow-auto">
                <!-- Navigation Menu -->
                <div class="tw-flex-1 tw-space-y-3 tw-mb-14">
                    <!-- Quản lý tờ trình -->
                    <div class="tw-group tw-cursor-pointer" t-on-click="() => this.onMenuItemClick('quan-ly-to-trinh')">
                        <div t-att-class="'tw-flex tw-items-center tw-gap-4 tw-p-4 tw-rounded-xl tw-transition-all tw-duration-200 tw-relative ' + (state.activeMenuItem === 'quan-ly-to-trinh' ? 'tw-bg-[#02B1EB] tw-text-white tw-shadow-md' : 'tw-bg-[#9BE0F7] tw-text-gray-800 hover:tw-bg-[#87D8F4]')">
                            <div class="tw-w-8 tw-h-8 tw-rounded tw-bg-gray-200 tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                                <img src="/tatd/static/src/img/icons/icon-quan-ly-to-trinh.svg" alt="Quản lý tờ trình" class="tw-w-8 tw-h-8"/>
                            </div>
                            <span class="tw-font-bold tw-text-[15.625px] tw-leading-6">Quản lý tờ trình</span>
                        </div>
                    </div>
                    
                    <!-- Quản lý trình ký -->
                    <div class="tw-group tw-cursor-pointer" t-on-click="() => this.onMenuItemClick('quan-ly-trinh-ky')">
                        <div t-att-class="'tw-flex tw-items-center tw-gap-4 tw-p-4 tw-rounded-xl tw-transition-all tw-duration-200 tw-relative ' + (state.activeMenuItem === 'quan-ly-trinh-ky' ? 'tw-bg-[#02B1EB] tw-text-white tw-shadow-md' : 'tw-bg-[#9BE0F7] tw-text-gray-800 hover:tw-bg-[#87D8F4]')">
                            <div class="tw-w-8 tw-h-8 tw-rounded tw-bg-gray-200 tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                                <img src="/tatd/static/src/img/icons/icon-quan-ly-trinh-ky.svg" alt="Quản lý trình ký" class="tw-w-8 tw-h-8"/>
                            </div>
                            <span class="tw-font-bold tw-text-[15.75px] tw-leading-6">Quản lý trình ký</span>
                        </div>
                    </div>
                    
                    <!-- Quản lý dự án -->
                    <div class="tw-group tw-cursor-pointer" t-on-click="() => this.onMenuItemClick('quan-ly-du-an')">
                        <div t-att-class="'tw-flex tw-items-center tw-gap-4 tw-p-4 tw-rounded-xl tw-transition-all tw-duration-200 tw-relative ' + (state.activeMenuItem === 'quan-ly-du-an' ? 'tw-bg-[#02B1EB] tw-text-white tw-shadow-md' : 'tw-bg-[#9BE0F7] tw-text-gray-800 hover:tw-bg-[#87D8F4]')">
                            <div class="tw-w-8 tw-h-8 tw-rounded tw-bg-gray-200 tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                                <img src="/tatd/static/src/img/icons/icon-quan-ly-du-an.svg" alt="Quản lý dự án" class="tw-w-8 tw-h-8"/>
                            </div>
                            <span class="tw-font-bold tw-text-[15.625px] tw-leading-6">Quản lý dự án</span>
                        </div>
                    </div>
                    
                    <!-- Quản lý công việc -->
                    <div class="tw-group tw-cursor-pointer" t-on-click="() => this.onMenuItemClick('quan-ly-cong-viec')">
                        <div t-att-class="'tw-flex tw-items-center tw-gap-4 tw-p-4 tw-rounded-xl tw-transition-all tw-duration-200 tw-relative ' + (state.activeMenuItem === 'quan-ly-cong-viec' ? 'tw-bg-[#02B1EB] tw-text-white tw-shadow-md' : 'tw-bg-[#9BE0F7] tw-text-gray-800 hover:tw-bg-[#87D8F4]')">
                            <div class="tw-w-8 tw-h-8 tw-rounded tw-bg-gray-200 tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                                <img src="/tatd/static/src/img/icons/icon-quan-ly-cong-viec.svg" alt="Quản lý công việc" class="tw-w-8 tw-h-8"/>
                            </div>
                            <span class="tw-font-bold tw-text-[15.75px] tw-leading-6">Quản lý công việc</span>
                        </div>
                    </div>
                    
                    <!-- Quản lý công văn -->
                    <div class="tw-group tw-cursor-pointer" t-on-click="() => this.onMenuItemClick('quan-ly-cong-van')">
                        <div t-att-class="'tw-flex tw-items-center tw-gap-4 tw-p-4 tw-rounded-xl tw-transition-all tw-duration-200 tw-relative ' + (state.activeMenuItem === 'quan-ly-cong-van' ? 'tw-bg-[#02B1EB] tw-text-white tw-shadow-md' : 'tw-bg-[#9BE0F7] tw-text-gray-800 hover:tw-bg-[#87D8F4]')">
                            <div class="tw-w-8 tw-h-8 tw-rounded tw-bg-gray-200 tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                                <img src="/tatd/static/src/img/icons/icon-quan-ly-cong-van.svg" alt="Quản lý công văn" class="tw-w-8 tw-h-8"/>
                            </div>
                            <span class="tw-font-bold tw-text-[15.75px] tw-leading-6">Quản lý công văn</span>
                        </div>
                    </div>
                    
                    <!-- Quản lý tài nguyên -->
                    <div class="tw-group tw-cursor-pointer" t-on-click="() => this.onMenuItemClick('quan-ly-tai-nguyen')">
                        <div t-att-class="'tw-flex tw-items-center tw-gap-4 tw-p-4 tw-rounded-xl tw-transition-all tw-duration-200 tw-relative ' + (state.activeMenuItem === 'quan-ly-tai-nguyen' ? 'tw-bg-[#02B1EB] tw-text-white tw-shadow-md' : 'tw-bg-[#9BE0F7] tw-text-gray-800 hover:tw-bg-[#87D8F4]')">
                            <div class="tw-w-8 tw-h-8 tw-rounded tw-bg-gray-200 tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                                <img src="/tatd/static/src/img/icons/icon-quan-ly-tai-nguyen.svg" alt="Quản lý tài nguyên" class="tw-w-8 tw-h-8"/>
                            </div>
                            <span class="tw-font-bold tw-text-[15.75px] tw-leading-6">Quản lý tài nguyên</span>
                        </div>
                    </div>
                    
                    <!-- Cổng thông tin nội bộ -->
                    <div class="tw-group tw-cursor-pointer" t-on-click="() => this.onMenuItemClick('cong-thong-tin-noi-bo')">
                        <div t-att-class="'tw-flex tw-items-center tw-gap-4 tw-p-4 tw-rounded-xl tw-transition-all tw-duration-200 tw-relative ' + (state.activeMenuItem === 'cong-thong-tin-noi-bo' ? 'tw-bg-[#02B1EB] tw-text-white tw-shadow-md' : 'tw-bg-[#9BE0F7] tw-text-gray-800 hover:tw-bg-[#87D8F4]')">
                            <div class="tw-w-8 tw-h-8 tw-rounded tw-bg-gray-200 tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                                <img src="/tatd/static/src/img/icons/icon-cong-thong-tin-noi-bo.svg" alt="Cổng thông tin nội bộ" class="tw-w-8 tw-h-8"/>
                            </div>
                            <span class="tw-font-bold tw-text-[15.75px] tw-leading-6">Cổng thông tin nội bộ</span>
                        </div>
                    </div>
                    
                    <!-- Chat Section -->
                    <div class="tw-mt-4">
                        <div class="tw-group tw-cursor-pointer" t-on-click="() => this.onMenuItemClick('chat-odoo')">
                            <div t-att-class="'tw-flex tw-items-center tw-gap-4 tw-p-4 tw-rounded-xl tw-transition-all tw-duration-200 tw-relative ' + (state.activeMenuItem === 'chat-odoo' ? 'tw-bg-[#FF612A] tw-text-white tw-shadow-md' : 'tw-bg-transparent tw-text-gray-800 hover:tw-bg-gray-50')">
                                <div class="tw-w-8 tw-h-8 tw-rounded tw-bg-white tw-flex tw-items-center tw-justify-center tw-relative">
                                    <img src="/tatd/static/src/img/icons/icon-chat-odoo.svg" alt="Chat Odoo" class="tw-w-6 tw-h-6"/>
                                </div>
                                <span class="tw-font-bold tw-text-[15.75px] tw-leading-6">Trò chuyện / Thảo luận trên Odooo</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Calendar Widget -->
                <div class="tw-bg-[#04B1EC] tw-rounded-2xl tw-p-4 tw-text-white">
                    <!-- Month/Year Header -->
                    <div class="tw-flex tw-items-center tw-justify-between tw-mb-4">
                        <div class="tw-flex tw-items-center tw-gap-3">
                            <div class="tw-w-[84px] tw-h-[68px] tw-relative tw-rounded-lg tw-overflow-hidden">
                                <img src="/tatd/static/src/img/calendar-image.png" alt="Calendar" height="68" class="tw-w-[84px] tw-h-[68px] tw-object-cover"/>
                            </div>
                            <h3 class="tw-font-bold tw-text-[32px] tw-leading-tight tw-font-['Be_Vietnam_Pro']" t-esc="getCurrentDate().month"/>
                        </div>
                    </div>
                    
                    <!-- Calendar Grid -->
                    <div class="tw-grid tw-grid-cols-7 tw-gap-2">
                        <t t-foreach="generateCalendarDays()" t-as="dayInfo" t-key="dayInfo_index">
                            <div t-if="!dayInfo.isEmpty" 
                                 t-att-class="'tw-bg-white tw-text-black tw-rounded-lg tw-h-8 tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-medium tw-font-[Be_Vietnam_Pro] ' + (dayInfo.isToday ? 'tw-bg-yellow-400' : '')">
                                <span t-esc="dayInfo.day"/>
                            </div>
                            <div t-if="dayInfo.isEmpty" class="tw-h-8"></div>
                        </t>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/** @odoo-module **/

import { Component, xml, useState } from '@odoo/owl';
import { BasicComponent } from '../components/BasicComponent';
import { MyChart } from '../components/MyChart';
import { DashboardHeader } from './dashboard/header/Header';
import { DashboardLeftSide } from './dashboard/left-side/LeftSide';
import { DashboardBody } from './dashboard/body/Body';
import { DashboardRightSide } from './dashboard/right-side/RightSide';

/**
 * Simple TATD Dashboard with basic Tailwind CSS utilities only
 */
export class TatdDashboard extends Component {
    static components = {
        BasicComponent,
        MyChart,
        DashboardHeader,
        DashboardLeftSide,
        DashboardBody,
        DashboardRightSide,
    };

    static template = xml`
        <div class="tatd-scope">
            <!-- Dashboard with background image -->
            <div class="tw-h-screen tw-overflow-auto tw-bg-cover tw-bg-center tw-bg-no-repeat" 
                 style="background-image: url('/tatd/static/src/img/background.png');">
                
                <!-- Header Section -->
                <div class="tw-w-full tw-h-20">
                    <DashboardHeader />
                </div>
                
                <!-- Main Content Area -->
                <div class="tw-flex tw-h-[calc(100vh-5rem)]">
                    <!-- Left Sidebar -->
                    <div class="tw-flex-shrink-0">
                        <DashboardLeftSide />
                    </div>
                    
                    <!-- Main Body -->
                    <div class="tw-flex-1 tw-mx-4 tw-overflow-auto">
                        <DashboardBody />
                    </div>
                    
                    <!-- Right Sidebar -->
                    <div class="tw-w-64 tw-flex-shrink-0 tw-overflow-auto">
                        <DashboardRightSide />
                    </div>
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

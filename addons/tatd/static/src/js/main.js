/** @odoo-module **/

import { registry } from "@web/core/registry";
import { TatdDashboard } from "./pages/TatdDashboard";

// Register the dashboard as a client action
registry.category("actions").add("tatd.dashboard", TatdDashboard);

// Export main components
export { BasicComponent } from "./components/BasicComponent";
export { TatdDashboard } from "./pages/TatdDashboard";

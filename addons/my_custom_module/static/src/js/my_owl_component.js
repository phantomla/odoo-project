/** @odoo-module **/

import { Component, xml, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

// Font Awesome is already included in Odoo, we don't need to import it

// Define your Owl component
class MyOwlComponent extends Component {
    static template = xml`<div class="my-owl-component">
        <div class="dashboard-header">
            <div class="user-info">
                <img t-att-src="props.userImage" class="user-avatar" alt="User Avatar"/>
                <div class="user-details">
                    <h2>Hello, <t t-esc="props.userName"/>!</h2>
                    <p><t t-esc="props.company"/></p>
                </div>
            </div>
            <div class="notifications-panel">
                <div class="notification-icon" t-on-click="toggleNotifications">
                    <i class="fa fa-bell"></i>
                    <span t-if="getUnreadCount()" class="badge" t-esc="getUnreadCount()"></span>
                </div>
                <div t-if="state.showNotifications" class="notifications-dropdown">
                    <h3>Notifications</h3>
                    <div t-if="props.notifications.length === 0" class="no-notifications">
                        No notifications
                    </div>
                    <div t-foreach="props.notifications" t-as="notification" t-key="notification.id" 
                         t-att-class="notification.read ? 'notification-item read' : 'notification-item unread'">
                        <div class="notification-message" t-esc="notification.message"></div>
                        <div class="notification-time" t-esc="notification.time"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="dual-panel-layout">
            <!-- Left side - dynamic part scrollable list -->
            <div class="left-panel">
                <div t-foreach="getLeftCategories()" t-as="category" t-key="category" 
                     t-att-class="{'left-section': true, 'active': state.activeCategory === category}"
                     t-on-click="() => this.selectCategory(category)"
                     t-attf-style="--category-color: {{getCategoryColor(category)}}">
                    <h3>Category <t t-esc="category"/></h3>
                    <div class="scrollable-list">
                        <div t-foreach="getLeftItems(category)" t-as="item" t-key="item.id" class="list-item">
                            <span t-esc="item.name"></span>
                            <span t-if="item.count" class="item-count" t-esc="item.count"></span>
                        </div>
                        <div t-if="!getLeftItems(category).length" class="empty-message">
                            No items available
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Right side - content based on selected tab -->
            <div class="right-panel">
                <div t-if="state.activeCategory !== null" class="active-category-content">
                    <h3 class="category-title">Content for Category <t t-esc="state.activeCategory"/></h3>
                    
                    <t t-set="activeSections" t-value="getActiveSections()"/>
                    
                    <div t-foreach="activeSections" t-as="section" 
                         t-key="section" class="right-section"
                         t-attf-style="--section-gradient: {{getSectionGradient(section)}}">
                        <div class="section-header">
                            <h4>Section <t t-esc="section"/></h4>
                            <span class="section-badge"><t t-esc="getRightItems(section).length"/> items</span>
                        </div>
                        <div class="scrollable-list">
                            <div t-foreach="getRightItems(section)" t-as="item" t-key="item.id" class="list-item">
                                <span class="item-title" t-esc="item.title"></span>
                                <div class="item-details">
                                    <span t-if="item.description" class="item-description" t-esc="item.description"></span>
                                    <span t-if="item.value" class="item-value" t-esc="item.value"></span>
                                </div>
                            </div>
                            <div t-if="!getRightItems(section).length" class="empty-message">
                                No items available
                            </div>
                        </div>
                    </div>
                    
                    <div t-if="!activeSections.length" class="no-sections">
                        No content available for this category
                    </div>
                </div>
                
                <div t-else="" class="no-category-selected">
                    Please select a category from the left panel
                </div>
            </div>
        </div>
    </div>`;

    static props = {
        userName: { type: String, optional: true },
        company: { type: String, optional: true },
        userImage: { type: String, optional: true },
        notifications: { type: Array, optional: true },
        // New structure for left panel with 3 categories
        leftItems: { type: Object, optional: true },
        // New structure for right panel with 7 sections
        rightItems: { type: Object, optional: true }
    };

    setup() {
        // Initialize categories here
        // Note: We need to define getLeftCategories first as a method before calling it
        this.getLeftCategoriesInit = () => {
            if (!this.props.leftItems) return [];
            // Extract category numbers from keys like "category1", "category2", etc.
            return Object.keys(this.props.leftItems)
                .filter(key => key.startsWith("category"))
                .map(key => parseInt(key.replace("category", "")))
                .sort((a, b) => a - b);
        };
        
        const categories = this.getLeftCategoriesInit();
        const activeCategory = categories.length > 0 ? categories[0] : null;
        
        // Use useState to make the state reactive
        this.state = useState({
            clicked: false,
            showNotifications: false,
            activeCategory: activeCategory, // Default to first category
        });
    }

    toggleNotifications() {
        this.state.showNotifications = !this.state.showNotifications;
    }
    
    getUnreadCount() {
        if (!this.props.notifications) return 0;
        return this.props.notifications.filter(notification => !notification.read).length;
    }
    
    getLeftCategories() {
        if (!this.props.leftItems) return [];
        // Extract category numbers from keys like "category1", "category2", etc.
        return Object.keys(this.props.leftItems)
            .filter(key => key.startsWith("category"))
            .map(key => parseInt(key.replace("category", "")))
            .sort((a, b) => a - b);
    }
    
    getRightSections() {
        if (!this.props.rightItems) return [];
        // Extract section numbers from keys like "section1", "section2", etc.
        return Object.keys(this.props.rightItems)
            .filter(key => key.startsWith("section"))
            .map(key => parseInt(key.replace("section", "")))
            .sort((a, b) => a - b);
    }
    
    getLeftItems(category) {
        if (!this.props.leftItems) return [];
        const categoryKey = `category${category}`;
        return this.props.leftItems[categoryKey] || [];
    }
    
    getRightItems(section) {
        if (!this.props.rightItems) return [];
        const sectionKey = `section${section}`;
        return this.props.rightItems[sectionKey] || [];
    }
    
    viewItem(id, type) {
        console.log(`View ${type} details for ID: ${id}`);
        // In a real application, this would navigate to the item details page
        // or open a modal with item details
        this.state.clicked = !this.state.clicked;
    }
    
    selectCategory(category) {
        // First set to null to trigger a clean animation reset
        this.state.activeCategory = null;
        
        // Use a small timeout to ensure the DOM updates and animation resets
        setTimeout(() => {
            // Update to the new category
            this.state.activeCategory = category;
            console.log(`Selected category: ${category}`);
            
            // Get the sections for this category to verify they're being retrieved correctly
            const sections = this.getRightSectionsForCategory(category);
            console.log(`Sections for category ${category}:`, sections);
            
            // Add staggered animation to sections after render
            setTimeout(() => {
                const sectionElements = document.querySelectorAll('.right-section');
                sectionElements.forEach((section, index) => {
                    section.style.animationDelay = `${index * 0.1}s`;
                });
            }, 50);
        }, 50);
    }
    
    getRightSectionsForCategory(category) {
        if (category === null) return [];
        
        // Each category has 3 sections associated with it
        // Category 1: sections 1-3
        // Category 2: sections 4-6
        // Category 3: sections 7-9
        // And so on...
        const lowerBound = (category - 1) * 3;
        const upperBound = category * 3;
        
        // Get sections in range for this category (e.g., category 1 gets sections 1, 2, and 3)
        const sections = this.getRightSections().filter(
            section => section > lowerBound && section <= upperBound
        ).sort((a, b) => a - b); // Ensure sections are in order
        
        console.log(`For category ${category}: lowerBound=${lowerBound}, upperBound=${upperBound}, sections=`, sections);
        return sections;
    }
    
    // Helper method to get the sections for the currently active category
    // This will be called directly from the template to ensure reactivity
    getActiveSections() {
        const category = this.state.activeCategory;
        if (category === null) return [];
        
        // Log the current active category for debugging
        console.log(`Getting active sections for category ${category}`);
        
        // Use the existing method to get sections for this category
        return this.getRightSectionsForCategory(category);
    }
    
    // Generate a CSS gradient based on the section number for visual variety
    getSectionGradient(section) {
        const gradients = [
            'linear-gradient(to right, #3498db, #2ecc71)', // blue to green
            'linear-gradient(to right, #e74c3c, #f39c12)', // red to orange
            'linear-gradient(to right, #9b59b6, #3498db)', // purple to blue
            'linear-gradient(to right, #1abc9c, #3498db)', // teal to blue
            'linear-gradient(to right, #f39c12, #e74c3c)', // orange to red
            'linear-gradient(to right, #2ecc71, #1abc9c)', // green to teal
            'linear-gradient(to right, #9b59b6, #8e44ad)'  // light purple to dark purple
        ];
        
        // Get index based on section modulo number of gradients
        const index = (section - 1) % gradients.length;
        return gradients[index];
    }
    
    // Generate a category color based on the category number
    getCategoryColor(category) {
        const colors = [
            '#3498db', // blue
            '#e74c3c', // red
            '#2ecc71', // green
            '#9b59b6', // purple
            '#f39c12', // orange
            '#1abc9c', // teal
            '#8e44ad'  // dark purple
        ];
        
        // Get index based on category modulo number of colors
        const index = (category - 1) % colors.length;
        return colors[index];
    }
}

// Register the component for use in QWeb templates
registry.category("web_components").add("MyOwlComponent", MyOwlComponent);

export { MyOwlComponent };

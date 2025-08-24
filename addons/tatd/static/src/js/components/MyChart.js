import { Component, onMounted, useRef, xml } from '@odoo/owl';

export class MyChart extends Component {
    static template = xml`
        <div class="tw-w-full tw-h-64">
            <canvas t-ref="chartCanvas" class="tw-w-full tw-h-full"></canvas>
        </div>
    `;

    setup() {
        this.canvasRef = useRef('chartCanvas');
        onMounted(() => {
            // Use global Chart object from CDN
            if (window.Chart) {
                new window.Chart(this.canvasRef.el, {
                    type: 'bar',
                    data: {
                        labels: ['A', 'B', 'C'],
                        datasets: [
                            {
                                label: 'Example',
                                data: [10, 20, 30],
                                backgroundColor: '#3b82f6',
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                    },
                });
            } else {
                console.error('Chart.js not loaded');
                this.canvasRef.el.parentElement.innerHTML =
                    '<p class="tw-text-red-600">Chart.js failed to load</p>';
            }
        });
    }
}

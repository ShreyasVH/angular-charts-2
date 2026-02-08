import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from "chart.js";

@Component({
    selector: 'app-doughnut-chart',
    templateUrl: './doughnut-chart.html',
    imports: [ BaseChartDirective ],
})
export class DoughnutChart {

    public data: ChartData<'doughnut'> = {
        labels: [ 'January', 'February', 'March' ],
        datasets: [
            {
                label: 'My Doughnut Chart',
                data: [40, 20, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }
        ]
    };

    public options: ChartConfiguration<'doughnut'>['options'] = {
        plugins: {
            legend: {
                display: true,
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    };
}

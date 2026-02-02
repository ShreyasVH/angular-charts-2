import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from "chart.js";

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.html',
    imports: [ BaseChartDirective ],
})
export class BarChart {

    public barChartData: ChartData<'bar'> = {
        labels: [ 'January', 'February', 'March' ],
        datasets: [
            {
                label: 'My Bar Chart',
                data: [40, 20, 12],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1
            }
        ]
    };

    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
        scales: {
            x: {},
            y: {},
        },
        plugins: {
            legend: {
                display: true,
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    };
}

import {Component, Input} from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from "chart.js";

@Component({
    selector: 'app-doughnut-chart',
    templateUrl: './doughnut-chart.html',
    imports: [ BaseChartDirective ],
})
export class DoughnutChart {

    @Input() data: any;

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

import { Component } from '@angular/core';
import { BarChart } from "./components/bar-chart/bar-chart";
import { DoughnutChart } from "./components/doughnut-chart/doughnut-chart";
import { CommonModule } from "@angular/common";
import { ChartData } from "chart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [BarChart, DoughnutChart, CommonModule],
})
export class App {
  type = 'bar';

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    this.type = params.get('type') ?? 'bar';
    console.log(this.type);
  }

  dataDoughnut1: ChartData<'doughnut'> = {
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

  dataDoughnut2: ChartData<'doughnut'> = {
    labels: [ 'April', 'May', 'June' ],
    datasets: [ { label: 'My Doughnut Chart 2', data: [33, 25, 18],
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
}

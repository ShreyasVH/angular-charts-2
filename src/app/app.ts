import { Component } from '@angular/core';
import { BarChart } from "./components/bar-chart/bar-chart";
import { DoughnutChart } from "./components/doughnut-chart/doughnut-chart";
import { CommonModule } from "@angular/common";

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
}

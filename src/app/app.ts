import { Component } from '@angular/core';
import { BarChart } from "./components/bar-chart/bar-chart";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [BarChart],
})
export class App {}

import { Component } from '@angular/core';

@Component({
  selector: 'main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  cards = [
    { id: 1, title: 'Card 1', cols: 2, rows: 1 },
    { id: 2, title: 'Card 2', cols: 1, rows: 1 },
    { id: 3, title: 'Card 3', cols: 1, rows: 2 },
    { id: 4, title: 'Card 4', cols: 1, rows: 1 }
  ];
}

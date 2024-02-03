import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public display: boolean = false;
  public timestampClicks: string[] = [];

  public displayDetails(): void {
    let date: Date = new Date();

    this.display = true;
    this.timestampClicks.push(date.toTimeString());
  }
}

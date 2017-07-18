import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Power Levels';

    power: number;

    constructor() { }

    ngOnInit() {
        this.power = 10;
    }
}

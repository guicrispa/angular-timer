import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);
  counter: number = 0;

  seconds() {
    return Math.trunc(this.counter % 60);
  }

  minutes() {
    return Math.trunc(this.counter / 60);
  }

  constructor() {}

  ngOnInit() {}
}

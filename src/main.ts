import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MeComponent } from './me/me.component';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MeComponent, TimerComponent], // componente importado
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      TESTING and now it is right!!!!!!!!!!!!!!!!!!!!!!!!
      <app-me></app-me>

      <app-timer></app-timer>
    </a>
  `,
})
export class App {
  name = 'Jardim Casqueiro!';
}

bootstrapApplication(App);
